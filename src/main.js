import Vue from 'vue'
import App from './App'
import router from './router'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
Vue.use(Vuesax)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

