import Vue from 'vue'
import App from './views/App.vue'

// 引入路由
import router from "./router"
new Vue({
    router,  // 注入到根实例中
    render: h => h(App)
}).$mount('#app');
