<template>
  <div>
      <MenuComponent :menuList="subMenuList" />
      <main id="main">
        <router-view />
      </main>
  </div>
</template>

<script>

import MenuComponent from '@/components/MenuComponent.vue';

export default {
  name: 'MainLayout',
  components: {
    MenuComponent
  },
  props: {
    subMenuList: Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  display: flex;
  justify-content: center;
}
#main, ::v-deep #wrapper {
  display: flex;
  justify-content: center;
  background-color: var(--secondary-background-color);
}

#main {
  // position: fixed;
  padding-top: 2vh;
  width: 100vw;
  align-items: flex-start;
  height: 100vh;
}

::v-deep #wrapper {
  // width: 70vw;
  width: 100%;
  flex-direction: column;
}

h3 {
  margin: 40px 0 0;
}
::v-deep .router-link-active {
  text-decoration: underline;
}
::v-deep .menu-ul {
  position: fixed;
  left: 5vw;
  list-style-type: none;
  margin: 0px;
  padding: 0;
  > li {
    width: 100%;
    margin-top: 10vh;
    font-size: 1.3rem;
  }
}

@media (max-width:800px) {
  #main {
    padding-bottom: 5vh;
  }

  ::v-deep .menu-ul {
    width: 100%;
    height: 50px;
    left: unset;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    z-index: 9;
    > li {
      margin-top: unset;
    }
  }
}
</style>
