import Vue from 'vue'

import router from "./router"
//import store from './store'

import App from './views/App.vue'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
