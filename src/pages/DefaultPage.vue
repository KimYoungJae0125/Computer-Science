<template>
    <div>
        <h1><router-link to="menu">공부하러 가기</router-link></h1>
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
    color: var(--active-font-color);
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    height: 100vh;
  }
  </style>
  