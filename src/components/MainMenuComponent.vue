<template>
  <div>
    
  </div>
  <!-- <MenuComponent :menuList="menuList" /> -->
</template>

<script>

// import MenuComponent from './MenuComponent.vue';

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
  name: 'MainMenuComponent',
  components: {
    // MenuComponent
  },
  data: () => {
    return {
      menuList 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
::v-deep .router-link-active {
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
  // background-color: #000000b0;
  // background-color: #000000;
  // opacity: 0.6;
  height: 70px;
}

</style>
