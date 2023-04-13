<template>
  <div class="hello">
    <TitleComponent :title=title />
    <h2> DFS란?</h2>
    <h4>최대한 깊이 내려간 뒤, 더 이상 깊이 갈 곳이 없을 경우 옆으로 이동</h4>
    <div class="circle-wrapper">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div id="line1" class="line"></div>
        <div id="line2" class="line"></div>
        <div id="line3" class="line"></div>
    </div>
  </div>
</template>

<script>

import TitleComponent from '@/components/TitleComponent.vue';

export default {
  name: 'DfsPage',
  components: {
    TitleComponent
  },  
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.circle-wrapper {
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
  > div:nth-of-type(2), > div:nth-of-type(5), > div:nth-of-type(9) {
    margin-top: 20vh;    
  }
  > div:nth-of-type(3), > div:nth-of-type(6), > div:nth-of-type(8), > div:nth-of-type(10) {
    margin-top: 40vh;    
  }
  > div:nth-of-type(4), > div:nth-of-type(7) {
    margin-top: 60vh;
  }
  > div:nth-of-type(2) {
    margin-left: -25vw;
  }
  > div:nth-of-type(9) {
    margin-left: 25vw;
  }
  > div:nth-of-type(3), > div:nth-of-type(4)  {
    margin-left: -35vw;    
  }
  > div:nth-of-type(6), > div:nth-of-type(7) {
    margin-left: -10vw;    
  }
  > div:nth-of-type(8) {
    margin-left: 10vw;    
  }
  > div:nth-of-type(10) {
    margin-left: 35vw;    
  }
  .line {
    border-radius: unset;
    width: 0.1vw;
    height: 10vh;
    background-color: black;
  }
  #line1, #line2 {
    margin-top: 8vh;
  }
  #line1 {
    transform: rotate(45deg);
    margin-left: -14vw;
  }
  #line2 {
    transform: rotate(-45deg);
    margin-left: 14vw;
  }
  #line3 {
    margin-top: 10vh;
    height: 5vh;
  }  
}

@media (max-width: "800px") {
  .circle-wrapper {
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
  }
  
}

</style>
