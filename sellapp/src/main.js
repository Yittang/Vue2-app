import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import BScroll from 'better-scroll'

import '@/common/style/index.less'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //es6语法，等价于router: router
  components: { App },
  template: '<App/>'
})
