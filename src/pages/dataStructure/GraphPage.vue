<template>
    <div id="wrapper">
        <h2>{{ title }}</h2>
        <GraphComponent />
        <UndirectedGraphComponent />
        <DirectedGraphComponent />
        <ComplteGraphComponent />
    </div>
</template>

<script>
import GraphComponent from '@/components/dataStructure/graph/GraphComponent.vue';
import UndirectedGraphComponent from '@/components/dataStructure/graph/UndirectedGraphComponent.vue';
import DirectedGraphComponent from '@/components/dataStructure/graph/DirectedGraphComponent.vue';
import ComplteGraphComponent from '@/components/dataStructure/graph/ComplteGraphComponent.vue';

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