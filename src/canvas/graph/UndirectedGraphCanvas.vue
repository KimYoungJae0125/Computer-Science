<template>
    <canvas id="undirectedCanvas"></canvas>
</template>

<script>
import { drawingGraph } from '@/utils/CanvasUtils.js';
import arcInfoList from '@/assets/graphs/vertex.json';
import lineInfoList from '@/assets/graphs/line.json';

export default {
    name: "UndirectedGraphCanvas",
    mounted() {
        drawingGraph('undirectedCanvas', arcInfoList, lineInfoList);
    }
}

</script>
