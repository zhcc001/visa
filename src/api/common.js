// import axios from 'axios'

// export function getSMS(mobile) {
//   const url = `/api/common/sms?mobile=${mobile}`

//   return axios.post(url)
//     .then(res => {
//       // 让第一个事件执行完之后执行下一个事件，同步写法
//       return Promise.resolve(res.data)
//     })
// }

// export function getUserInfo(Code) {
//   let url = ''
//   let params = {}
//   if (JudgeNavigator()) {
//     url = '/api/weixin/member'
//     params = {
//       Code
//     }
//   } else {
//     url = '/api/up/member'
//     params = {
//       Code
//     }
//   }
//   return axios.get(url,
//     {
//       params
//     })
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function getAdvert(code) {
//   const url = '/api/site/advert'

//   const params = {
//     code,
//     siteId: 1000
//   }

//   return axios.get(url,
//     {
//       params
//     })
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function getCommend(code, siteId = 1000) {
//   const url = '/api/site/commend'

//   const params = {
//     code,
//     siteId
//   }

//   return axios.get(url,
//     {
//       params
//     })
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function getMedias(productTypeId, productId) {
//   const url = '/api/product/media'

//   const params = {
//     productTypeId,
//     productId
//   }

//   return axios.get(url,
//     {
//       params
//     })
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function getComment(params) {
//   const url = '/api/comment/info'

//   params.approveStatusId = 1

//   return axios.get(url,
//     {
//       params
//     })
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function thumbComment(isCancel, commentId, memberId) {
//   const url = `/api/comment/thumb?isCancel=${isCancel}&commentId=${commentId}&memberId=${memberId}`

//   const params = {
//     isCancel,
//     commentId,
//     memberId
//   }

//   return axios.post(url, params)
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function getOrderInfo(id, memberId) {
//   const url = `/api/order/info/${id}?memberId=${memberId}`

//   return axios.get(url)
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function cancelOrder(orderId, memberId) {
//   const url = `/api/order/cancel?orderId=${orderId}&memberId=${memberId}`

//   const params = {
//     orderId,
//     memberId
//   }

//   return axios.post(url, params)
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }
// /* eslint-disable */
// export function WechatPayParams(orderId, openId, amount,from,urls) {
//   let _openId = encodeURIComponent(openId)
//   let url = `/api/order/pay?orderId=${orderId}&openId=${_openId}&amount=${amount}&from=${from}&url=${urls}`
//   return axios.post(url)
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function getCities() {
//   const url = '/api/common/destination?typeIds=4'

//   return axios.get(url)
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function setFavor(memberId, favouriteTypeId, contentTypeId, contentId) {
//   const url = `/api/member/favourite?memberId=${memberId}&favouriteTypeId=${favouriteTypeId}&contentTypeId=${contentTypeId}&contentId=${contentId}`

//   const params = {
//     memberId,
//     favouriteTypeId,
//     contentTypeId,
//     contentId
//   }

//   return axios.post(url, params)
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function cancelFavor(memberId, favouriteTypeId, contentTypeId, contentId) {
//   const url = `/api/member/favourite?memberId=${memberId}&favouriteTypeId=${favouriteTypeId}&contentTypeId=${contentTypeId}&contentId=${contentId}`

//   const params = {
//     memberId,
//     favouriteTypeId,
//     contentTypeId,
//     contentId
//   }

//   return axios.delete(url, params)
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function isFavor(memberId, favouriteTypeId, contentTypeId, contentId) {
//   const url = '/api/member/favourite'

//   const params = {
//     memberId,
//     favouriteTypeId,
//     contentTypeId,
//     contentId
//   }

//   return axios.get(url, { params })
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function getWeChatConfig(purl) {
//   const url = '/api/weixin/config'

//   const params = {
//     url: purl
//   }

//   return axios.get(url, { params })
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function getMessageCount(memberId) {
//   const url = '/api/message/count?messageTypeId='

//   const params = {
//     memberId
//   }

//   return axios.get(url, { params })
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// export function JudgeNavigator() {
//   var ua = navigator.userAgent.toLowerCase()
//   var isWeixin = ua.indexOf('micromessenger') != -1
//   if (isWeixin) {
//     return true
//   } else {
//     return false
//   }
// }


