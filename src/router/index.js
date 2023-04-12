import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/MainPage.vue')
        },
        {
            path: '/data-structure',
            name: 'data structure',
            component: () => import('@/components/DataStructure.vue')
        },
    ]
})