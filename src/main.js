import Vue from 'vue'
import App from './App'
import callFunction from './common/js/callFunction'
Vue.config.productionTip = false
wx.cloud.init()
Vue.prototype.$goto = function (url) {
  console.log(url)
  uni.navigateTo({ url })
}
Vue.prototype.$callFun = callFunction
App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
