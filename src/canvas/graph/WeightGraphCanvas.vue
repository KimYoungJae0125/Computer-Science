<template>
    <canvas id="weightGraphCanvas"></canvas>
</template>

<script>
import { canvasScaling, drawingCircle, drawingLine, drawingWeightText } from '@/utils/CanvasUtils.js'
import arcInfoList from '@/assets/graphs/vertex2.json';
import lineInfoList from '@/assets/graphs/line2.json';
import weightInfoList from '@/assets/graphs/weight.json'

const drawingWeightGraph = (canvasId, arcInfoList, lineInfoList, weightInfoList) => {
    const context = canvasScaling(canvasId, [300, 550]);

    arcInfoList.forEach(info => drawingCircle(context, info));
    lineInfoList.forEach(info => drawingLine(context, info));
    weightInfoList.forEach(info => drawingWeightText(context, info));
}

export default {
    name: "WeightGraphCanvas",
    mounted() {

        drawingWeightGraph('weightGraphCanvas', arcInfoList, lineInfoList, weightInfoList);
    }
}

</script>