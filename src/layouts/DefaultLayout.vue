<template>
  <div>
    <MainMenuComponent />
    <router-view />
  </div>
</template>

<script>
import MainMenuComponent from '@/components/MainMenuComponent.vue'

export default {
  name: 'DefaultLayout',
  components: {
    MainMenuComponent
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
