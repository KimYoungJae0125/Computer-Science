<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #C2BFAF;
  background-color: black;
}
* {
  margin: 0;
  padding: 0;
}
a {
  color: rgb(230, 232, 216);
  text-decoration: none;
}

</style>
