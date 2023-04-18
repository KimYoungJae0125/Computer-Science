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
        <div id="circleWrapper">
          <div id="circle1"></div>
          <div id="circle2"></div>
          <div id="circle3"></div>
          <div id="circle4"></div>
          <div id="circle5"></div>
          <div id="circle6"></div>
          <div id="circle7"></div>
          <div id="circle8"></div>
          <div id="circle9"></div>
          <div id="circle10"></div>
          
          <div id="line1" class="line"></div>
          <div id="line2" class="line"></div>
          <div id="line3" class="line"></div>
          <div id="line4" class="line"></div>
          <div id="line5" class="line"></div>
          <div id="line6" class="line"></div>
          <div id="line7" class="line"></div>
          <div id="line8" class="line"></div>
          <div id="line9" class="line"></div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>

import TitleComponent from '@/components/TitleComponent.vue';
import DfsComponent from '@/components/algorithm/DfsComponent.vue'
import BfsComponent from '@/components/algorithm/BfsComponent.vue';


export default {
  name: 'DfsBfsPage',
  components: {
    TitleComponent,
    DfsComponent,
    BfsComponent
  },  
  props: {
    title: String
  },
  methods: {
    searchDFS() {
      this.$refs.dfs.search()
    },
    searchBFS() {
      this.$refs.bfs.search()
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.search {
  background-color: aqua;
}

#main {
  width: 100vw;
  display: flex;
  justify-content: center;
}

#wrapper {
  width: 70vw;
}



#circleWrapper {
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    border: 1px solid black;
    border-radius: 30rem;
    width: 3rem;
    height: 3rem;
  }
  > #circle2, > #circle5, > #circle9 {
    margin-top: 20vh;    
  }
  > #circle3, > #circle6, > #circle8, > #circle10 {
    margin-top: 40vh;    
  }
  > #circle4, > #circle7 {
    margin-top: 60vh;
  }
  > #circle2 {
    margin-left: -25vw;
  }
  > #circle9 {
    margin-left: 25vw;
  }
  > #circle3, > #circle4  {
    margin-left: -35vw;    
  }
  > #circle6, > #circle7 {
    margin-left: -10vw;    
  }
  > #circle8 {
    margin-left: 10vw;    
  }
  > #circle10 {
    margin-left: 35vw;    
  }
  .line {
    border-radius: unset;
    width: 0.1vw;
    height: 9vh;
    background-color: black;
  }
  #line1, #line2, #line3 {
    margin-top: 10vh;
  }
  #line1 {
    transform: rotate(50deg);
    margin-left: -12vw;
  }
  #line2 {
    transform: rotate(-50deg);
    margin-left: 12vw;
  }
  #line3 {
    height: 4.5vh;
  }  
  #line4 {
    margin-top: 29.5vh;
    margin-left: -32vw;
    height: 6vh;
    transform: rotate(25deg);
  }  
  #line5 {
    height: 5vh;
    margin-top: 50vh;
    margin-left: -35vw;
  }
  #line6 {
    height: 5.9vh;
    margin-top: 30.3vh;
    margin-left: -5vw;
    transform: rotate(25deg);
  }
  #line7 {
    height: 5.9vh;
    margin-top: 30.3vh;
    margin-left: 5vw;
    transform: rotate(-25deg);
  }
  #line8 {
    height: 5vh;
    margin-top: 50.3vh;
    margin-left: -10vw;
  }
  #line9 {
    height: 5.9vh;
    margin-top: 30.3vh;
    margin-left: 30vw;
    transform: rotate(-25deg);
  }
}

@media (max-width: "800px") {
  #circleWrapper {
    > div {
      width: 2rem;
      height: 2rem;
    }
    .line {
      height: 7.5vh;
    }
    #line1, #line2 {
      margin-top: 9.5vh;
    }
    #line1 {
      transform: rotate(45deg);
      margin-left: -14vw;
    }
    #line2 {
      transform: rotate(-45deg);
      margin-left: 14vw;
    }
  }
  #descriptionWrapper {
    margin-left: 5vw;
  }
  
}

</style>
