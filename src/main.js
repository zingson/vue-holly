import Vue from 'vue'

import router from './router/index'
import store from './store/index'

import App from './views/App.vue'

// 组件日志输出
Vue.prototype.$log = function (s) {
  console.log(s)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
