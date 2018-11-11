import Vue from 'vue'
import App from './views/App.vue'
import router from './router/index'
import store from './store/index'

import Config from './config'
Vue.prototype.$conf = Config

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
