import router from './index.js'
import store from '../store/index.js'
import Vue from 'vue'
// import {getAuthLink} from '@/views/User/api.js'

router.beforeEach((to, from, next) => {
  const toDeepth = to.fullPath.substr(1).split('/').length
  const fromDeepth = from.fullPath.substr(1).split('/').length

  if (to.meta.forceTransitionName && to.meta.forceTransitionName[0]) {
    // 如果有特殊的入场动画需求
    store.commit('SET_TRANSITIONNAME', to.meta.forceTransitionName[0])
  } else if (to.meta.forceTransitionName && to.meta.forceTransitionName[1]) {
    // 特殊的出场动画需求
    store.commit('SET_TRANSITIONNAME', from.meta.forceTransitionName[1])
  } else {
    // 动画默认依据路由深度
    if (toDeepth < fromDeepth) {
      store.commit('SET_TRANSITIONNAME', 'fadeOutRight')
    } else if (toDeepth > fromDeepth) {
      store.commit('SET_TRANSITIONNAME', 'fadeInRight')
    } else {
      if (store.state.transitionName !== '') {
        store.commit('SET_TRANSITIONNAME', '')
      }
    }
  }

  // if (to.meta.needLogin && !store.state.userInfo.Id) {
  //   let vm = new Vue()
  //   vm.$createDialog({
  //     type: 'confirm',
  //     title: '未登录',
  //     content: '是否授权登录',
  //     icon: 'cubeic-alert',
  //     confirmBtn: {
  //       text: '授权',
  //       active: true,
  //       disabled: false,
  //       href: 'javascript:;'
  //     },
  //     cancelBtn: {
  //       text: '取消',
  //       active: false,
  //       disabled: false,
  //       href: 'javascript:;'
  //     },
  //     onConfirm: () => {
  //       getAuthLink(location.href)
  //         .then(res => {
  //           location.replace(res.Result)
  //         })
  //         .catch(err => {
  //           if (!err.message) {
  //             return
  //           }
  //           this.$$toast(err.message)
  //         })
  //     }
  //   }).show()
  // } else {
  //   next()
  // }
})
