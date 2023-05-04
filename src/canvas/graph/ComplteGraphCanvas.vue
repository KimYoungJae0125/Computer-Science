<template>
    <div>
        <div>
            <canvas id="complteCanvas"></canvas>
            <canvas id="directedComplteCanvas"></canvas>
        </div>
    </div>
</template>

<script>
import { canvasScaling, drawingCircle, drawingLine, drawingArrowLine } from '@/utils/CanvasUtils.js'
import arcInfoList from '@/assets/graphs/vertex.json';
import lineInfoList from '@/assets/graphs/line.json';

const drawingComplteGraph = (canvasId, arcInfoList, lineInfoList) => {
    const context = canvasScaling(canvasId, [300, 200]);

    arcInfoList.forEach(info => drawingCircle(context, info));
    lineInfoList.forEach(info => drawingLine(context, info))
}

const drawingDirectedComplteGraph = (canvasId, arcInfoList, lineInfoList) => {
    const context = canvasScaling(canvasId, [300, 200]);

    arcInfoList.forEach(info => drawingCircle(context, info));
    const reverseLineList = [];
    lineInfoList.forEach(info => {
        drawingArrowLine(context, info)
        reverseLineList.push({startX: info.endX, startY: info.endY, endX: info.startX, endY: info.startY});
    })
    reverseLineList.forEach(info => drawingArrowLine(context, info))
}


export default {
    name: "ComplteGraphCanvas",
    mounted() {
        drawingComplteGraph('complteCanvas', arcInfoList, lineInfoList);
        drawingDirectedComplteGraph('directedComplteCanvas', arcInfoList, lineInfoList);
    }
}

</script>
