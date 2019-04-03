import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index'
import Search from '@/pages/search'
import VisaList from '@/pages/visaList'
import VisaReserve from '@/pages/visaReserve'
import AddPassenger from '@/pages/addPassenger'
import SelectReserve from '@/pages/selectReserve'
// const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        title:'签证首页'
      }
    },{
      path: '/Search',
      name: 'search',
      component: Search,
      meta:{
        title:'搜索国家',
        forceTransitionName: ['fadeInRight', 'fadeOutRight']
      }
    },{
      path: '/VisaList',
      name: 'visaList',
      component: VisaList,
      meta:{
        title:'签证列表',
        forceTransitionName: ['fadeInRight', 'fadeOutRight']
      }
    },{
      path: '/VisaReserve',
      name: 'visaReserve',
      component: VisaReserve,
      meta:{
        title:'签证预定',
        forceTransitionName: ['fadeInRight', 'fadeOutRight']

      }
    },{
      path: '/AddPassenger',
      name: 'addPassenger',
      component: AddPassenger,
      meta:{
        title:'新增预订人',
        forceTransitionName: ['fadeInRight', 'fadeOutRight']
      }
    },{
      path: '/SelectReserve',
      name: 'selectReserve',
      component: SelectReserve,
      meta:{
        title:'选择预订人',
        forceTransitionName: ['fadeInRight', 'fadeOutRight']
      }
    },
  ]
})
