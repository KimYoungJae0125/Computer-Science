<template>
    <canvas id="defaultCanvas"></canvas>
</template>

<script>
import { drawingGraph } from '@/utils/CanvasUtils.js'
import arcInfoList from '@/assets/graphs/vertex.json';
import lineInfoList from '@/assets/graphs/line.json';

export default {
    name: "GraphCanvas",
    mounted() {
        drawingGraph('defaultCanvas', arcInfoList, lineInfoList);
    }
}

</script>