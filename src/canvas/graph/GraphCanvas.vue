<template>
    <canvas id="defaultCanvas"></canvas>
</template>

<script>
import { canvasScaling, drawingCircle, drawingLine } from '@/utils/CanvasUtils.js'
import arcInfoList from '@/assets/graphs/vertex.json';
import lineInfoList from '@/assets/graphs/line.json';

const drawingGraph = (canvasId, arcInfoList, lineInfoList) => {
    const context = canvasScaling(canvasId, [300, 200]);

    arcInfoList.forEach(info => drawingCircle(context, info));
    lineInfoList.filter((v,i) => i<4).forEach(info => drawingLine(context, info))
}

export default {
    name: "GraphCanvas",
    mounted() {
        drawingGraph('defaultCanvas', arcInfoList, lineInfoList);
    }
}

</script>