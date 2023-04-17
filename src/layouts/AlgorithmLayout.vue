<template>
  <div class="hello">
      <aside>
        <ul>
          <li v-for="algorithm in algorithmList" :key="algorithm.id">
            <router-link :to="algorithm.link">{{ algorithm.title }}</router-link>
          </li>
        </ul>
      </aside>
      <router-view />
  </div>
</template>

<script>

import algorithmMenu from "@/assets/menus/algorithm.json";

const algorithmList = algorithmMenu.map(menu => {
  menu.link = `/menu/algorithm/${menu.link}`;
  return menu;
});

export default {
  name: 'AlgorithmLayout',
  props: {
    title: String
  },
  data: () => {
    return {
      algorithmList
    }
  },
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
  margin-top: 10vh;
  font-size: 2rem;
}
a {
  color: #669881;
}
</style>
