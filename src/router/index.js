import Vue from "vue";
import VueRouter from "vue-router";
import AlgorithmPage from '@/pages/AlgorithmPage.vue'
import DataStructurePage from '@/pages/DataStructurePage.vue'

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
            path: '/menu',
            component: () => import('@/layouts/DefaultLayout.vue'),
            children: [
                {
                    path: 'data-structure',
                    component: DataStructurePage
                },
                {
                    path: 'algorithm',
                    component: AlgorithmPage
                },
            ]
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: () => import('@/pages/NotFoundPage.vue')
        },
    ].map(route => {
        if(route.name !== 'notFound')
        route.path = prefix + route.path;
        return route;
    })
})

console.log()