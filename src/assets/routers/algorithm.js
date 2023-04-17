import algorithmMenu from "@/assets/menus/algorithm.json";

import MainLayout from '@/layouts/MainLayout.vue'
import AlgorithmPage from '@/pages/algorithm/AlgorithmPage.vue'
import DfsBfsPage from '@/pages/algorithm/DfsBfsPage.vue'

const algorithm =  {
    path: 'algorithm',
    component: MainLayout,
    redirect: 'algorithm/main',
    props: {
        subMenuList: algorithmMenu
    },
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
}

export default algorithm;