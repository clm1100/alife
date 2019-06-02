import Vue from "vue";
import Router  from "vue-router";
import home from "./views/home"
import login from "./views/login"
import user from "./views/user"
import admin from "./views/admin"
Vue.use(Router);
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:"home",
            component:home
        },
        {
            path:'/login',
            name:'login',
            component:login
        },
        {
            path:'/admin',
            name:'admin',
            component:admin,
            children:[
                {
                    path:"/admin/post",
                    name:"post",
                    component:post
                }
            ]
        }
    ]
})