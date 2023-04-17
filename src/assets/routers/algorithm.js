import AlgorithmLayout from '@/layouts/AlgorithmLayout.vue'
import AlgorithmPage from '@/pages/AlgorithmPage.vue'
import DfsBfsPage from '@/pages/algorithm/DfsBfsPage.vue'

const algorithm =  {
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
}

export default algorithm;