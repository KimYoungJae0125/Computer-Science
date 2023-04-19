<template>
    <div>
        <h2>{{ title }}</h2>
        <GraphComponent />
        <UndirectedGraphComponent />
        <DirectedGraphComponent />
    </div>
</template>

<script>
import GraphComponent from '@/components/dataStructure/GraphComponent.vue';
import UndirectedGraphComponent from '@/components/dataStructure/UndirectedGraphComponent.vue';
import DirectedGraphComponent from '@/components/dataStructure/DirectedGraphComponent.vue';

export default {
    name: "GrapthPage",
    components: {
        GraphComponent,
        UndirectedGraphComponent,
        DirectedGraphComponent,
    },
    props: {
        title: String,
    },
}

</script>