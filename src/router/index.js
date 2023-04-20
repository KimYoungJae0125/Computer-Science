import Vue from "vue";
import VueRouter from "vue-router";

import dataStructure from "@/assets/routers/dataStructure";
import algorithm from "@/assets/routers/algorithm";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/DefaultPage.vue')
        },
        {
            path: '/menu',
            component: () => import('@/layouts/DefaultLayout.vue'),
            redirect: '/menu/data-structure',
            children: [
                dataStructure,
                algorithm,
            ]
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: () => import('@/pages/NotFoundPage.vue')
        },
    ]
})