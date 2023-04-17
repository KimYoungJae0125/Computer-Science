import DataStructureLayout from '@/layouts/DataStructureLayout'
import DataStructurePage from '@/pages/dataStructure/DataStructurePage.vue'


const dataStructure = {
    path: 'data-structure',
    component: DataStructureLayout,
    redirect: 'data-structure/main',
    children: [
        {
            path: 'main',
            component: DataStructurePage
        }   
    ]
}

export default dataStructure;