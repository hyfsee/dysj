import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import store from './store';
import chartjs from 'vue-chartjs';

Vue.use(chartjs)
Vue.use(Vant)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
