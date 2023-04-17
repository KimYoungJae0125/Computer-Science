import Vue from "vue";
import VueRouter from "vue-router";

import AlgorithmLayout from '@/layouts/AlgorithmLayout.vue'
import DataStructureLayout from '@/layouts/DataStructureLayout'
import AlgorithmPage from '@/pages/AlgorithmPage.vue'
import DataStructurePage from '@/pages/DataStructurePage.vue'
import DfsBfsPage from '@/pages/algorithm/DfsBfsPage.vue'



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
                    component: DataStructureLayout,
                    redirect: 'data-structure/main',
                    children: [
                        {
                            path: 'main',
                            component: DataStructurePage
                        }   
                    ]
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
                            path: 'dfs-bfs',
                            component: DfsBfsPage,
                            props: {
                                title: 'DFS/BFS'
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