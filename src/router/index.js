import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect:'/Home'
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/classify',
        name: 'classify',
        component:()=>import('../views/classify.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component:()=>import('../views/profile.vue')
    },
    {
        path: '/shop',
        name: 'shop',
        component:()=>import('../views/shop.vue')
    },


]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
