<template>
    <canvas id="directedCanvas"></canvas>
</template>

<script>
import { drawingDirectedGraph } from '@/utils/CanvasUtils.js'
import arcInfoList from '@/assets/graphs/vertex.json';
import lineInfoList from '@/assets/graphs/line.json';

export default {
    name: "DirectedGraphCanvas",
    mounted() {
        drawingDirectedGraph('directedCanvas', arcInfoList, lineInfoList);
    }
}

</script>