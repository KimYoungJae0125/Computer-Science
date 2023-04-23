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
:root {
  --primary-background-color:black;
  --secondary-background-color: #07252D;

  --normal-font-color: #C2BFAF;
  --active-font-color: #beaa3d;
  --title-font-color: #ccc;
  --description-font-color: #C2BFAF;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: var(--normal-font-color);
  background-color: var(--primary-background-color);
}
* {
  margin: 0;
  padding: 0;
}
a {
  color: var(--normal-font-color);
  text-decoration: none;
}
button {
  width: 100px;
  padding: 5px;
  background-color: white;
  border-radius: 5px;
}

li {
  margin-top: 5px;
}

</style>
