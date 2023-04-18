import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('@/views/Home.vue')
    },
    {
        path: "/news",
        name: "News",
        component: () => import('@/views/News.vue')
    },
    {
        path: "/product",
        name: "Product",
        component: () => import('@/views/Product.vue')
    },
    {
        path: "/case",
        name: "Case",
        component: () => import('@/views/Case.vue')
    },
    {
        path: "/goin",
        name: "GoIn",
        component: () => import('@/views/GoIn.vue')
    },
    {
        path: "/download",
        name: "Download",
        component: () => import('@/views/Download.vue')
    },
    {
        path: '/casedetails/:id',
        name: 'casedetails',
        component: () => import('@/views/CaseDetails.vue')
    },
    {
        path: '/newsdetails/:id',
        name: 'newsdetails',
        component: () => import('@/views/NewsDetails.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
