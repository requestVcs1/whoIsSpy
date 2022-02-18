const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')
const { resultReturn, getCurrentDate } = require('./utils.js')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log(wxContext)
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
  app.router('getRoom', async ctx => {
    const { _req } = ctx
    const data = _req.event
    db.collection('room')
      .where({
        _id: data.id,
      })
      .watch({
        onChange: function (snapshot) {
          console.log('数据改变', snapshot)
        },
        onError: function (err) {
          console.error('the watch closed because of error', err)
        },
      })
  })
  // 加入房间
  app.router('joinRoom', async ctx => {
    const { _req } = ctx
    const data = _req.event
    const result =  db.collection('room').where({
      _id: data.id,
    })
    ctx.body = {
      message: '测试joinRoom',
      data: result,
    }
  })
  return app.serve()
}
