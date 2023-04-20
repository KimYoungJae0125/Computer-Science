<template>
    <div>
        <DescriptionComponent title="방향 그래프" :descriptions="descriptions" />
        <DirectedGraphCanvas />
    </div>
</template>

<script>
import DescriptionComponent from '@/components/DescriptionComponent.vue';
import DirectedGraphCanvas from '@/canvas/graph/DirectedGraphCanvas.vue';

const descriptions = [
    '방향 그래프(Directed Graph)는 간선에 방향이 있는 그래프',
    '방향 그래프에서 정점 Vi와 Vj를 연결하는 간선을 <Vi, Vj>로 표현하는데, 이 때 Vi를 꼬리(tail), Vj를 머리(head)라고 한다.',
    '방향 그래프는 <Vi, Vj> 와 <Vj, Vi>는 서로 다른 간선',
    'V(G1)={A, B, C, D}, E(G1)={(A, B), (B, C), (C, D), (D, A)}',
]

export default {
    name: 'DirectedGraphComponent',
    components: {
        DescriptionComponent,
        DirectedGraphCanvas
    },
    data: () => {
        return {
            descriptions
        }
    }
}
</script>

<style scoped>
div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>