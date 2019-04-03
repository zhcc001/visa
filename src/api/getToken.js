import md5 from 'js-md5'
var fly = require('flyio')
var qs = require('qs')

// // 正式接口
// // export const BASE_URL = ''
// // 测试接口
export const BASE_URL = 'http:test.api.langtt.net'
export function getToken() {
  let TimeStamp = new Date().getTime()
  let AppSecret = md5(TimeStamp + 'b04ed0f02d9446c4b62851a80ad215b3')
  let url = `${BASE_URL}`
  let AppId=10022
  // api / authorize / token
  return new Promise((resolve, reject) => {
    fly.post(url, qs.stringify({
      AppId: AppId,
      AppSecret: AppSecret,
      TimeStamp: TimeStamp,
      MemberId: localStorage.getItem('_memberId_' + localStorage.getItem('_appId')) || 0
    }))
      .then(function (res) {
        console.log(res)
        localStorage.setItem('token', res.data.Result.Value)
        resolve(res.data.Result.Value)
      })
      .catch(function (error) {
        console.log(error)
      })
  })
}