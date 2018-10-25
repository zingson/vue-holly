import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const _import = view => () => import('@/views/' + view + '.vue');
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component: _import("Home")
        },
        {
            path: "/about",
            component: _import("About")
        },
        // 重定向
        {
            path: '/',
            redirect: '/home'
        }
    ]
});
