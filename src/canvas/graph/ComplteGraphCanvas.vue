<template>
    <div>
        <div>
            <canvas id="complteCanvas"></canvas>
            <canvas id="directedComplteCanvas"></canvas>
        </div>
    </div>
</template>

<script>
import { drawingComplteGraph, drawingDirectedComplteGraph } from '@/utils/CanvasUtils.js'
import arcInfoList from '@/assets/graphs/vertex.json';
import lineInfoList from '@/assets/graphs/line.json';

export default {
    name: "ComplteGraphCanvas",
    mounted() {
        drawingComplteGraph('complteCanvas', arcInfoList, lineInfoList);
        drawingDirectedComplteGraph('directedComplteCanvas', arcInfoList, lineInfoList);
    }
}

</script>
