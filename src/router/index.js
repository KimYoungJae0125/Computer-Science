import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const prefix = process.env.NODE_ENV === 'production' ? '/Computer-Science' : "";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/MainPage.vue')
        },
        {
            path: '/data-structure',
            name: 'data structure',
            component: () => import('@/pages/DataStructurePage.vue')
        },
        {
            path: '/algorithm',
            name: 'algorithm',
            component: () => import('@/pages/AlgorithmPage.vue')
        },
    ].map(route => {
        route.path = prefix + route.path;
        return route;
    })
})