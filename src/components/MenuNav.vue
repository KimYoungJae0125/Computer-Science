<template>
  <div class="hello">
    <ul>
      <li v-for="menu in menuList" :key="menu.id">
        <router-link :to="menu.link">{{ menu.title }} </router-link>
      </li>

    </ul>
  </div>
</template>

<script>

const prefix = process.env.NODE_ENV === 'production' ? '/Computer-Science' : '';

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
  menu['link'] = prefix+menu['link'];
  return menu;
});

console.log(menuList);

console.log(process.env.NODE_ENV);


export default {
  name: 'MenuNav',
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
