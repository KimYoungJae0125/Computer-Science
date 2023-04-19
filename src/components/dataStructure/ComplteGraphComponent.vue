<template>
    <div>
        <DescriptionComponent title="완전 그래프" :descriptions="descriptions" />
        <ComplteGraphCanvas />
    </div>
</template>

<script>
import DescriptionComponent from '../DescriptionComponent.vue';
import ComplteGraphCanvas from '@/canvas/graph/ComplteGraphCanvas.vue';

const descriptions = [
    '완전 그래프(Complte Graph)는 한 정점에서 다른 모든 정점과 연결되어 최대 간선 수를 갖는 그래프',
    '정점이 n개인 완전 그래프에서 무방향 그래프의 최대 간선 수는 n(n-1)/2이고 방향 그래프의 최대 간선 수는 n(n-1)',
]

export default {
    name: 'ComplteGraphComponent',
    components: {
        DescriptionComponent,
        ComplteGraphCanvas
    },
    data: () => {
        return {
            descriptions
        }
    }

}

</script>