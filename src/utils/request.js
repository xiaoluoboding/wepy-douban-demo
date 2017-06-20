import wepy from 'wepy'

const apiRequest = async (url, method = 'GET', data = {}) => {
  const options = {
    url,
    method,
    data,
    header: {
      'content-type': 'json' // 'application/json'   // 'application/x-www-form-urlencoded'
    }
  }
  
  wepy.showToast({
    title: '正在载入...',
    icon: 'loading',
    duration: 10000,
    mask: true
  })

  const res = await wepy.request(options)

  if (res.statusCode === 200) {
    wepy.hideToast()
    return res.data
  }
}

export default apiRequest