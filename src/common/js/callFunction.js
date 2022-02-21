export default function (route, data, target = 'router') {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await wx.cloud.callFunction({
        name: target,
        data: {
          $url: route,
          ...data,
        },
      })
      resolve(result.result)
    } catch (error) {
      uni.showToast({
        title: error,
        icon: 'none',
      })
      reject(error)
    }
  })
}
