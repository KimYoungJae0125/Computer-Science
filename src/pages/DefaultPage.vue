<template>
    <div class="hello">
        <h1>메인페이지</h1>
        <router-link to="menu">메뉴</router-link>
    </div>
  </template>
  
  <script>

  export default {
    name: 'DefaultPage',
    props: {
      msg: String
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  a {
    color: #42b983;
  }
  </style>
  