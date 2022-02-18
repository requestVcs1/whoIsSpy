import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
wx.cloud.init()
Vue.prototype.$goto = function (url) {
  console.log(url)
  uni.navigateTo({ url })
}
Vue.prototype.$callFun = function (route, data, target = 'router') {
  return wx.cloud.callFunction({
    name: target,
    data: {
      $url: route,
      ...data,
    },
  })
}
App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
