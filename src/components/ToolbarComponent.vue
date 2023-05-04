<template>
  <ul>
    <li flat v-on:click="showMenu()" v-for="menu in menuList" :key="menu.id">
      <router-link v-if="menu.link == '/'" to="/" exact>{{ menu.title }}</router-link>
      <router-link v-else :to="menu.link">{{ menu.title }} </router-link>
    </li>
  </ul>
</template>

<script>

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


import { isMobile } from '@/utils/CommonUtils';

export default {
    name: 'ToolbarComponent',
    data: () => {
        return {
            menuList
        }
    },
    methods: {
        showMenu() {
            if(isMobile()) {
                this.$parent.showMenu()
            }
        }
    }
}

</script>

<style scoped lang="scss">
.router-link-active {
  color: var(--active-font-color);
  font-size:1.7rem;
  text-decoration: underline;
}
ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
  height: 70px;
}

</style>