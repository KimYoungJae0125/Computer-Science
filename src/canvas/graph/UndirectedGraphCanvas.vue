<template>
    <canvas id="UndirectedCanvas"></canvas>
</template>

<script>
import { drawingGraph } from '@/utils/CanvasUtils.js';
import arcInfoList from '@/assets/graphs/vertex.json';
import lineInfoList from '@/assets/graphs/line.json';

export default {
    name: "UndirectedGraphCanvas",
    mounted() {
        drawingGraph('UndirectedCanvas', arcInfoList, lineInfoList);
    }
}

</script>

<style scoped>
#UndirectedCanvas {
    position: relative;
    width: 80vw;
    height: 30vh;
    border: 1px solid #ccc;
}
</style>
