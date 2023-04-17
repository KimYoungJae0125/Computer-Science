import dataStructureMenu from "@/assets/menus/dataStructure.json";

import MainLayout from '@/layouts/MainLayout.vue'
import DataStructurePage from '@/pages/dataStructure/DataStructurePage.vue'


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
        }   
    ]
}

export default dataStructure;