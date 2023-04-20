<template>
  <div id="wrapper">
    <TitleComponent :title=title />
    <DfsComponent ref="dfs" title="깊이 우선 탐색(DFS, Depth-First Search)이란?" />
    <BfsComponent ref="bfs" title="너비 우선 탐색(BFS, Breadth-First Search)" />
    <div>
      <h3>그림으로 보는 탐색 방법</h3>
      <button @click="searchDFS()">dfs 탐색</button>
      <button @click="searchBFS()">bfs 탐색</button>
      <div style="height: 40vh;">
        <TreeCanvas ref="tree" />
      </div>  
    </div>
  </div>
</template>

<script>

import TitleComponent from '@/components/TitleComponent.vue';
import DfsComponent from '@/components/algorithm/DfsComponent.vue'
import BfsComponent from '@/components/algorithm/BfsComponent.vue';
import TreeCanvas from '@/canvas/tree/TreeCanvas.vue';


export default {
  name: 'DfsBfsPage',
  components: {
    TitleComponent,
    DfsComponent,
    BfsComponent,
    TreeCanvas
  },  
  props: {
    title: String
  },
  methods: {
    searchDFS() {
      this.$refs.tree.dfs()
    },
    searchBFS() {
      this.$refs.tree.bfs()
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#wrapper {
  width: 70vw;
}

</style>
