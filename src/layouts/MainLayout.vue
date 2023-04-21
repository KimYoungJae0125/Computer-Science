<template>
  <main id="main">
    <MenuComponent :menuList="subMenuList"/>
    <router-view />
  </main>
</template>

<script>

import MenuComponent from '@/components/MenuComponent.vue';

import { isMobile } from '@/utils/CommonUtils';

export default {
  name: 'MainLayout',
  components: {
    MenuComponent
  },
  props: {
    subMenuList: Array
  },
  data: () => {
    return {
      isMobile: isMobile()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#main, ::v-deep #wrapper {
  display: flex;
  background-color: var(--secondary-background-color);
}

#main {
  padding-top: 2vh;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  // min-height: 100vh;
}

::v-deep #wrapper {
  width: 60vw;
  min-height: 100vh;
  // width: 100%;
  flex-direction: column;
  border: 1px solid #ccc;
}

h3 {
  margin: 40px 0 0;
}
::v-deep .router-link-active {
  text-decoration: underline;
}
::v-deep .menu-ul {
  position: fixed;
  left: 3vw;
  width: 15vw;
  list-style-type: none;
  background-color: var(--secondary-background-color);
  // min-height: 100vh;

  margin-top: 10vh;
  > li {
    padding: 5px;
    width: 100%;
    // margin-top: 10vh;
    font-size: 1.3rem;
  }
}

@media (max-width:800px) {

  #main {
    padding-top: unset;
  }
  ::v-deep .menu-ul {
    // display: none;
  }

  ::v-deep #wrapper {
    width: 100vw;
  }

}
</style>
