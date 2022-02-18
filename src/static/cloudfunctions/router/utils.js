const dayjs = require('dayjs')
module.exports = {
  resultReturn({code = 200, data, message = '请求成功'}) {
    return {
      code,
      message,
      data
    }
  },
  getCurrentDate() {
    return dayjs().format("YYYY-MM-DD HH:mm:ss")
  }
}
