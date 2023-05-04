<template>
    <canvas id="directedCanvas"></canvas>
</template>

<script>
import { canvasScaling, drawingCircle, drawingArrowLine } from '@/utils/CanvasUtils.js'
import arcInfoList from '@/assets/graphs/vertex.json';
import lineInfoList from '@/assets/graphs/line.json';

const drawingDirectedGraph = (canvasId, arcInfoList, lineInfoList) => {
    const context = canvasScaling(canvasId, [300, 200]);

    arcInfoList.forEach(info => drawingCircle(context, info));
    lineInfoList.filter((v,i) => i<4).forEach(info => drawingArrowLine(context, info))
}



export default {
    name: "DirectedGraphCanvas",
    mounted() {
        drawingDirectedGraph('directedCanvas', arcInfoList, lineInfoList);
    }
}

</script>