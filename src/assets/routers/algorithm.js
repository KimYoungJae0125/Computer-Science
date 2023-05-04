import algorithmMenu from "@/assets/menus/algorithm.json";

import MainLayout from '@/layouts/MainLayout.vue'
import MainPage from '@/pages/MainPage.vue'
import DfsBfsPage from '@/pages/algorithm/DfsBfsPage.vue'
import DijkstraPage from '@/pages/algorithm/DijkstraPage.vue'

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
            component: MainPage,
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
        },
        {
            path: 'dijkstra',
            component: DijkstraPage,
            props: {
                title: '다익스트라(Dijkstra)'
            }
        }
    ]
}

export default algorithm;