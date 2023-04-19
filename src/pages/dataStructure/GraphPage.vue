<template>
    <div>
        <h2>{{ title }}</h2>
        <GraphComponent />
        <UndirectedGraphComponent />
        <DirectedGraphComponent />
        <ComplteGraphComponent />
    </div>
</template>

<script>
import GraphComponent from '@/components/dataStructure/GraphComponent.vue';
import UndirectedGraphComponent from '@/components/dataStructure/UndirectedGraphComponent.vue';
import DirectedGraphComponent from '@/components/dataStructure/DirectedGraphComponent.vue';
import ComplteGraphComponent from '@/components/dataStructure/ComplteGraphComponent.vue';

export default {
    name: "GrapthPage",
    components: {
        GraphComponent,
        UndirectedGraphComponent,
        DirectedGraphComponent,
        ComplteGraphComponent,
    },
    props: {
        title: String,
    },
}

</script>