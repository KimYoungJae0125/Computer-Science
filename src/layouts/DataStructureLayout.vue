<template>
  <div class="hello">
      <aside>
        <ul>
          <li v-for="dataStructure in dataStructureList" :key="dataStructure.id">
            <router-link :to="dataStructure.link">{{ dataStructure.title }}</router-link>
          </li>
        </ul>
      </aside>
      <router-view />
  </div>
</template>

<script>

import dataStructureMenu from "@/menus/dataStructure.json";


const dataStructureList = dataStructureMenu.map(menu => {
  menu.link = `/menu/data-structure/${menu.link}`;
  return menu;
});

export default {
  name: 'DataStructureLayout',
  props: {
    title: String
  },
  data: () => {
    return {
      dataStructureList
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
