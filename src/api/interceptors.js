import axios from 'axios'
// import {APIPREFIX} from './config.js'
import qs from 'qs'
import Vue from 'vue'
import Cube from 'cube-ui'
import { BASE_URL, getToken } from './getToken.js'

Vue.use(Cube)
const vm = new Vue()
const toast = vm.$createToast({
  type: 'loading',
  mask: false,
  time: 0,
  txt: '数据正在加载，请稍后~'
})
let token = localStorage.getItem('token') || ''
axios.interceptors.request.use(
  config => {
    toast.show()
    // 发送请求前补全地址，和appid、appsecret
    config.url = `${BASE_URL}${config.url}`

    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    if (!token) {
      // getToken().then(res => {
      return getToken().then(res => {
        token = res
        config.headers['token'] = token
      })
    } else {
      config.headers['token'] = token
    }
    console.log(config.headers)
    return config
  },
  err => {
    return Promise.reject(err)
  })

axios.interceptors.response.use(
  res => {
    toast.hide()
    // 排除一个要处理的url
    if (res.config.method === 'get' && (res.config.url.indexOf('/api/weixin/member') > -1 || res.config.url.indexOf('/api/up/member') > -1)) {
      return res
    }

    if (res.data.Success) {
      return res
    } else {
      return Promise.reject(new Error(res.data.Message))
    }
  },
  err => {
    return Promise.reject(err)
  })
