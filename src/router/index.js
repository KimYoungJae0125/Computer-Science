import Vue from "vue";
import VueRouter from "vue-router";

import AlgorithmLayout from '@/layouts/AlgorithmLayout.vue'
import AlgorithmPage from '@/pages/AlgorithmPage.vue'
import DataStructurePage from '@/pages/DataStructurePage.vue'
import DfsPage from '@/pages/algorithm/DfsPage.vue'



Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
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
                    component: AlgorithmLayout,
                    redirect: 'algorithm/main',
                    children: [
                        {
                            path: 'main',
                            component: AlgorithmPage,
                            props: {
                                title: '알고리즘'
                            }
                        },
                        {
                            path: 'dfs',
                            component: DfsPage,
                            props: {
                                title: '깊이 우선 탐색(DFS, Depth-First Search)'
                            }
                        }
                    ]
                },
            ]
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: () => import('@/pages/NotFoundPage.vue')
        },
    ]
})