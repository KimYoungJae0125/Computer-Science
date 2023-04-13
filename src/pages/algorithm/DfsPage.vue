<template>
  <main id="main">
    <div id="wrapper">
      <TitleComponent :title=title />
      <h2> DFS란?</h2>
      <h4>최대한 깊이 내려간 뒤, 더 이상 깊이 갈 곳이 없을 경우 옆으로 이동</h4>
      <div id="descriptionWrapper">
        <h3>기본 개념</h3>
        <ul>
          <li v-for="(description, i) in descriptions" :key="i">
            {{ description }}
          </li>
        </ul>
      </div>
      <div style="height: 40vh;">
        <div id="circleWrapper">
            <div id="circle1">1</div>
            <div id="circle2">2</div>
            <div id="circle3">3</div>
            <div id="circle4">4</div>
            <div id="circle5">5</div>
            <div id="circle6">6</div>
            <div id="circle7">7</div>
            <div id="circle8">8</div>
            <div id="circle9">9</div>
            <div id="circle10">10</div>

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
  </main>
</template>

<script>

import TitleComponent from '@/components/TitleComponent.vue';

const descriptions = [
  '시작 노드에서 다음 분기로 넘어가기 전까지 해당 분기를 완벽하게 탐색하는 방식',
  '끝까지 탐색한 이후에 더 이상 탐색할 수가 없음 다음 장소로 탐색한다.',
  '끝까지 탐색한 이후에 더 이상 탐색할 수가 없음 다음 장소로 탐색한다.',
];


export default {
  name: 'DfsPage',
  components: {
    TitleComponent
  },  
  props: {
    title: String
  },
  data: () => {
    return {
      descriptions
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#main {
  width: 100vw;
  display: flex;
  justify-content: center;
}

#wrapper {
  width: 70vw;
}

#descriptionWrapper {
  margin-left: 10vw;
  text-align: left;
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
    transform: rotate(-20deg);
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
