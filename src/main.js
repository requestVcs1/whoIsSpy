import Vue from 'vue'
import App from './App'
import callFunction from './common/js/callFunction'
const img = require('./static/image/logo.png')

Vue.config.productionTip = false
wx.cloud.init()
Vue.prototype.$goto = function (url) {
  console.log(url)
  uni.navigateTo({ url })
}
Vue.prototype.$callFun = callFunction
App.mpType = 'app'
console.log(`当前环境为${process.env.NODE_ENV}|url=${process.env.BASE_URL}`)
const app = new Vue({
  ...App,
})
app.$mount()
