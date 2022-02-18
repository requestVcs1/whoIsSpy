export default {
  /**
   *  @return {number} 返回高度px
   * */
  getNavigateBarHeight() {
    wx.getSystemInfo({
      success: e => {
        // { statusBarHeight: 20, ... }，单位为 px
        // 获取右上角胶囊的位置信息
        let info = wx.getMenuButtonBoundingClientRect() // { bottom: 58, height: 32, left: 278, right: 365, top: 26, width: 87 }，单位为 px
        let CustomBar = info.bottom + info.top - e.statusBarHeight
        return CustomBar
      },
    })
  },
  getUserInfo() {
    return new Promise(resolve => {
      const userInfo = uni.getStorageSync('userInfo')
      if (userInfo) {
        console.log(userInfo)
        resolve(userInfo)
      } else {
        wx.getUserProfile({
          desc: '用于展示用户头像昵称',
          success: res => {
            uni.setStorageSync('userInfo', userInfo)
            resolve(res)
          },
        })
      }
    })
  },
}
