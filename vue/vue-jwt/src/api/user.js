import axios from '../libs/ajaxRequest.js'

// 放置接口
export const getUser = () => {
  return axios.request({
    url: '/user',
    method: 'get'
  })
}

