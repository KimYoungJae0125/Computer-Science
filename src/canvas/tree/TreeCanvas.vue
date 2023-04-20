<template>
    <canvas id="treeCanvas"></canvas>
</template>

<script>
import { getContext, drawingTree, drawingCircle } from '@/utils/CanvasUtils.js';
import { dfs, bfs } from '@/utils/SearchUtils.js';
import arcInfoList from '@/assets/trees/tree.json';
import lineInfoList from '@/assets/trees/line.json';

let context;

export default {
    name: "TreeCanvas",
    mounted() {
        drawingTree('treeCanvas', arcInfoList, lineInfoList);
        context = getContext('treeCanvas');
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
