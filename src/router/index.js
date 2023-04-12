import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const prefix = process.env.NODE_ENV === 'prod' ? '/Computer-Science' : "";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: `${prefix}/`,
            name: 'home',
            component: () => import('@/pages/MainPage.vue')
        },
        {
            path: `${prefix}/data-structure`,
            name: 'data structure',
            component: () => import('@/pages/DataStructurePage.vue')
        },
        {
            path: `${prefix}/algorithm`,
            name: 'algorithm',
            component: () => import('@/pages/AlgorithmPage.vue')
        },
    ]
})