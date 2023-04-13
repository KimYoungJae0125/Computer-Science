<template>
  <div class="hello">
    <TitleComponent :title=title />
  </div>
</template>

<script>
import TitleComponent from '@/components/TitleComponent.vue';



export default {
  name: 'AlgorithmPage',
  components: {
    TitleComponent
  },  
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="scss">
aside {
  position: fixed;
  left: 5vw;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  width: 100%;
  font-size: 3rem;
}
a {
  color: #42b983;
}
</style>
