<template>
    <canvas id="DirectedCanvas"></canvas>
</template>

<script>
import { drawingArrowGraph } from '@/utils/CanvasUtils.js'
import arcInfoList from '@/assets/graphs/vertex.json';
import lineInfoList from '@/assets/graphs/line.json';

export default {
    name: "DirectedGraphCanvas",
    mounted() {
        drawingArrowGraph('DirectedCanvas', arcInfoList, lineInfoList);
    }
}

</script>

<style scoped>
#DirectedCanvas {
    position: relative;
    width: 80vw;
    height: 30vh;
    border: 1px solid #ccc;
}
</style>
