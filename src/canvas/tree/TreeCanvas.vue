<template>
    <canvas id="treeCanvas"></canvas>
</template>

<script>
import { drawingCircle, canvasScaling, drawingLine } from '@/utils/CanvasUtils.js';
import { dfs, bfs } from '@/utils/SearchUtils.js';
import arcInfoList from '@/assets/trees/tree.json';
import lineInfoList from '@/assets/trees/line.json';

let context;

const drawingTree = (canvasId, arcInfoList, lineInfoList) => {
    const context = canvasScaling(canvasId, [300, 550]);

    arcInfoList.forEach(info => drawingCircle(context, info));
    lineInfoList.forEach(info => drawingLine(context, info));

    return context;
}


export default {
    name: "TreeCanvas",
    mounted() {
        context = drawingTree('treeCanvas', arcInfoList, lineInfoList);
    },
    methods: {
        init() {
            arcInfoList.forEach(info => drawingCircle(context, info, 'white'));
        },
        bfs() {
            this.init();
            bfs(arcInfoList, 3, context);
            // arcInfoList.forEach((info, index) => setTimeout(() => drawingCircle(context, info, 'aqua'), index*1000));
        },
        dfs() {
            this.init();
            dfs(arcInfoList, arcInfoList.find(info => info.text == 1), new Array(1).fill(0), context);
        }
    }
}

</script>
