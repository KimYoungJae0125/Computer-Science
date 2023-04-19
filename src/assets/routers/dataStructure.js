import dataStructureMenu from "@/assets/menus/dataStructure.json";

import MainLayout from '@/layouts/MainLayout.vue'
import DataStructurePage from '@/pages/dataStructure/DataStructurePage.vue'
import GraphPage from '@/pages/dataStructure/GraphPage.vue'


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
            component: DataStructurePage
        },
        {
            path: 'graph',
            component: GraphPage,
            props: {
                title: "그래프(Graph)"
            }
        } 
    ]
}

export default dataStructure;