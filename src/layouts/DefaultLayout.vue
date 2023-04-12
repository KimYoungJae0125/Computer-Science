<template>
  <div id="app">
    <MenuNav msg="Welcome to Your Vue.js App"/>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import MenuNav from '@/components/MenuNav.vue'

export default {
  name: 'DefaultLayout',
  components: {
    MenuNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
