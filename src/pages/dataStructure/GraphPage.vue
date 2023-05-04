<template>
    <div id="wrapper">
        <TitleComponent :title=title />
        <GraphComponent />
        <UndirectedGraphComponent />
        <DirectedGraphComponent />
        <ComplteGraphComponent />
        <CodeBlockComponet codeLanguage="java" title="인접 행렬" :codes="adjacencyMatrixCodes" />
        <CodeBlockComponet codeLanguage="java" title="인접 리스트" :codes="adjacencyListCodes" />
    </div>
</template>

<script>
import TitleComponent from '@/components/TitleComponent.vue';

import GraphComponent from '@/components/dataStructure/graph/GraphComponent.vue';
import UndirectedGraphComponent from '@/components/dataStructure/graph/UndirectedGraphComponent.vue';
import DirectedGraphComponent from '@/components/dataStructure/graph/DirectedGraphComponent.vue';
import ComplteGraphComponent from '@/components/dataStructure/graph/ComplteGraphComponent.vue';

import CodeBlockComponet from '@/components/basic/CodeBlockComponet.vue';

const adjacencyMatrixCodes = [
    'class Graph {',
    ' ',
    '   int[][] vertex;',
    ' ',
    '   Graph(int size) {',
    '     this.vertex = new int[size][size];',
    '   }',
    '   void addEdge(int x, int y) {',
    '     this.vertex[x][y] = 1;',
    '     this.vertex[y][x] = 1;',
    '   }',
    '}',
]
const adjacencyListCodes = [
    'class Graph {',
    ' ',
    '   List<List<Integer>> vertex;',
    ' ',
    '   Graph(int size) {',
    '     this.vertex = new ArrayList<>();',
    '     for(int i = 0; i < size; i++) {',
    '       this.vertex.add(',
    '           new ArrayList<>()',
    '       );',
    '     }',
    '   }',
    '   void addEdge(int x, int y) {',
    '     this.vertex.get(x).add(y);',
    '     this.vertex.get(y).add(x);',
    '   }',
    '}',
]

export default {
    name: "GraphPage",
    components: {
        TitleComponent,
        GraphComponent,
        UndirectedGraphComponent,
        DirectedGraphComponent,
        ComplteGraphComponent,
        CodeBlockComponet,
    },
    props: {
        title: String,
    },
    data: () => (
        {
            adjacencyMatrixCodes,
            adjacencyListCodes
        }
    )
}

</script>