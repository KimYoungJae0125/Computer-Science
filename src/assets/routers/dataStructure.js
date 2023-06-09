import dataStructureMenu from "@/assets/menus/dataStructure.json";

import MainLayout from '@/layouts/MainLayout.vue'
import MainPage from '@/pages/MainPage.vue'
import GraphPage from '@/pages/dataStructure/GraphPage.vue'
import RecursivePage from '@/pages/dataStructure/RecursivePage.vue'


const dataStructure = {
    path: 'data-structure',
    component: MainLayout,
    redirect: 'data-structure/main',
    props: {
        subMenuList: dataStructureMenu
    },
    children: [
        {
            path: 'main',
            component: MainPage,
            props: {
                title: '자료구조'
            }
        },
        {
            path: 'graph',
            component: GraphPage,
            props: {
                title: "그래프(Graph)"
            }
        }, 
        {
            path: 'recursive',
            component: RecursivePage,
            props: {
                title: "재귀(Recursive)"
            }
        } 
    ]
}

export default dataStructure;