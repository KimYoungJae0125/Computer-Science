<template>
  <div class="hello">
    <MenuComponent :menuList="menuList" />
  </div>
</template>

<script>

import MenuComponent from './MenuComponent.vue';

const menuList = [
  {
    id: 1,
    title: '메인 메뉴',
    link: '/'
  },
  {
    id: 2,
    title: '자료구조',
    link: '/data-structure'
  },
  {
    id: 3,
    title: '알고리즘',
    link: '/algorithm'
  }
].map(menu => {
  if(menu.link !== '/') {
    menu.link = `/menu${menu.link}`;
  }
  return menu;
});


export default {
  name: 'MenuNav',
  components: {
    MenuComponent
  },
  props: {
    msg: String
  },
  data: () => {
    return {
      menuList 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::v-deep ul {
  list-style-type: none;
  padding: 0;
}
::v-deep li {
  display: inline-block;
  margin: 0 10px;
  font-size: 1.5rem;
}
::v-deep a {
  color: #42b983;
}
</style>
