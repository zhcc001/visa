// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import VueAxios from 'vue-axios' 
import Cube from 'cube-ui'
import cookie from './utils/cookie.js'
import './api/interceptors.js'
// import './router/globalGuard.js'
import MintUI from 'mint-ui'
import './common/js/toast.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.use(cookie);
Vue.use(Cube)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
