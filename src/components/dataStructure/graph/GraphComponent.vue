<template>
    <div>
        <DescriptionComponent title="기본 개념" :descriptions="descriptions" />
        <GraphCanvas />
    </div>
</template>

<script>
import DescriptionComponent from '@/components/DescriptionComponent.vue';
import GraphCanvas from '@/canvas/graph/GraphCanvas.vue';

const descriptions = [
    '그래프(Graph)는 연결 되어 있는 원소간의 관계를 표현한 자료구조',
    '연결할 객체를 나타내는 정점(Vertex)과 객체를 연결하는 간선(Edge)의 집합으로 구성',
    '그래프 G를 G=(V, E)로 정의하는데, V는 정점의 집합, E는 간선들의 집합을 의미',
]

export default {
    name: 'GraphComponent',
    components: {
        DescriptionComponent,
        GraphCanvas
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