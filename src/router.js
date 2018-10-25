import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const _import = view => () => import('@/views/' + view + '.vue');
export default new VueRouter({
    routes:[
        { path: '/', redirect: '/home'},
        { path:"/home", component: _import("tmp/Home") },
        { path: "/about", component: _import("tmp/About") },
        { path: '/layout', component: _import("layout/Admin"),children:[
                {path:'about',component:_import("tmp/About")},
                {path:'home',components:{default:_import("tmp/Home"),home:_import("tmp/About")}}
            ] },
        {
            path:'/login',component:_import('login/Login')
        }
    ]
});
