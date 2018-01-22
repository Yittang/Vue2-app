import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //es6语法，等价于router: router
  components: { App },
  template: '<App/>'
})
