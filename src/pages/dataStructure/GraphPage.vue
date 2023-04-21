<template>
    <div id="wrapper">
        <TitleComponent :title=title />
        <GraphComponent />
        <UndirectedGraphComponent />
        <DirectedGraphComponent />
        <ComplteGraphComponent />
    </div>
</template>

<script>
import TitleComponent from '@/components/TitleComponent.vue';

import GraphComponent from '@/components/dataStructure/graph/GraphComponent.vue';
import UndirectedGraphComponent from '@/components/dataStructure/graph/UndirectedGraphComponent.vue';
import DirectedGraphComponent from '@/components/dataStructure/graph/DirectedGraphComponent.vue';
import ComplteGraphComponent from '@/components/dataStructure/graph/ComplteGraphComponent.vue';

export default {
    name: "GraphPage",
    components: {
        TitleComponent,
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