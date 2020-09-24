import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css';

Vue.use(Vant)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
