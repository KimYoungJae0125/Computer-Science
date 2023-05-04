<template>
  <nav>
    <div id="topMenuwrapper">
      <div id="hambugerButton" v-on:click="showMenu()">
        메뉴
      </div>
      <h2><router-link to="/">공부하자</router-link></h2>
    </div>
    <div id="hambugerMenuWrapper" v-if="isShow">
      <!-- <MenuComponent :menuList="menuList" /> -->
    </div >
  </nav>
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
    name: "MobileMainMenuComponet",
    data: () => {
        return {
            menuList,
            isShow : false
        };
    },
    components: { 
      // MenuComponent 
    },
    methods: {
      showMenu() {
        this.isShow = !this.isShow;
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
}

#topMenuwrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
}

#hambugerButton {
  position: absolute;
  left: 15px;
  color: var(--title-font-color);
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}

#hambugerMenuWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--normal-font-color);
  z-index: 2;
}

h2 {
  a {
    z-index: 9999999;
    color: var(--title-font-color);
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  }
}
::v-deep .menu-ul {
  list-style: none;
  position: fixed;
  top: 5vh;
  left: 5vw;
  width: 100%;
  height: 100vh;
  color: black;
  text-align: left;
  li {
    margin-top: 5vh;
    font-size: 1.7rem;
  }
  a {
    color: black;
    // z-index: 9999999;
  }
}

</style>
