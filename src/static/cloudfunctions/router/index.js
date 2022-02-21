const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')
const { resultReturn, getCurrentDate, tryCatch } = require('./utils.js')
cloud.init()
const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const app = new TcbRouter({ event })
  let NUM = 0
  // 创建房间
  app.router('createRoom', async ctx => {
    const { _req } = ctx
    const data = _req.event
    data.members[0].openid = wxContext.OPENID
    db.collection('room')
      .add({
        data: {
          name: data.name,
          members: data.members,
          owner: wxContext.OPENID,
          createTime: getCurrentDate(),
          _id: (NUM += 1),
        },
      })
      .then(res => {
        ctx.body = resultReturn({
          message: '创建成功',
          data: {
            id: res._id,
          },
        })
      })
  })
  // 获取房间
  app.router('getRoomInfo', async ctx => {
    const { _req } = ctx
    const data = _req.event
    const result = await db.collection('room').doc(+data.id).get()
    ctx.body = resultReturn({
      message: '获取房间信息成功',
      data: result.data,
    })
  })
  // 加入房间
  app.router('joinRoom', async ctx => {
    const { _req } = ctx
    const data = _req.event
    if (!data.avatarUrl) {
      ctx.body =  resultReturn({
        message: '用户信息为空',
        code: 400,
      })
      return
    }
    let result
    try {
      const query = await db.collection('room').doc(+data.id).get()
      result = query.data
    } catch (err) {
      return
    }
    console.log(result,'结果')
    const i = result.members.findIndex(item => {
      return item.openid === wxContext.OPENID
    })
    if (i > -1) {
      ctx.body = resultReturn({
        message: '加入成功',
        data: {
          id: data._id,
        },
      })
      return
    }
    if (result) {
      let userInfo = {
        avatarUrl: data.avatarUrl,
        nickName: data.nickName,
        openid: wxContext.OPENID
      }
      try {
        await db.collection.update({
          data: {
            menubar: _.push(userInfo)
          }
        })
        ctx.body =  resultReturn({
          message: '加入成功',
          data: {
            id: data._id,
          },
        })
      } catch (error) {
        ctx.body =  resultReturn({
          message: '加入失败',
          code: 400,
        })
      }
      
    }
     
  })
  return app.serve()
}
