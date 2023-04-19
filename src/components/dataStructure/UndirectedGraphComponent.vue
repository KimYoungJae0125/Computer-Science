<template>
    <div>
        <DescriptionComponent title="무방향 그래프" :descriptions="descriptions" />
        <UndirectedGraphCanvas />
    </div>
</template>

<script>
import DescriptionComponent from '../DescriptionComponent.vue';
import UndirectedGraphCanvas from '@/canvas/graph/UndirectedGraphCanvas.vue';

const descriptions = [
    '무방향 그래프(Undirected Graph)는 두 정점을 연결하는 간선에 방향이 없는 그래프',
    '무방향 그래프에서 정점 Vi와 Vj를 연결하는 간선을 (Vi, Vj)로 표현하는데, 이 때 (Vi, Vj)와 (Vj, Vi)는 같은 간선을 나타냅니다.',
    '무방향 그래프는 방향이 없기 때문에 (A -> B) == (B -> A) 가 성립된다.',
    'V(G1)={A, B, C, D}, E(G1)={(A, B), (A, D), (B, C), (B, D), (C, D)}',
]

export default {
    name: 'UndirectedGraphComponent',
    components: {
        DescriptionComponent,
        UndirectedGraphCanvas
    },
    data: () => {
        return {
            descriptions
        }
    }

}

</script>