// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import letUI from '../src/index'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'

Vue.use(letUI)
Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
