<template>
  <main id="main">
    <SideMenuComponent :menuList="subMenuList"/>
    <router-view />
  </main>
</template>

<script>

import SideMenuComponent from '@/components/SideMenuComponent.vue';

import { isMobile } from '@/utils/CommonUtils';

export default {
  name: 'MainLayout',
  components: {
    SideMenuComponent
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
  padding-bottom: 100px;
}

::v-deep #wrapper {
  width: 50vw;
  min-height: 100vh;
  // width: 100%;
  flex-direction: column;
  border: 1px solid #ccc;
  align-items: center;
  padding-bottom: 50px;
}

h3 {
  margin: 40px 0 0;
}


@media (max-width:800px) {

  #main {
    padding-top: unset;
  }
  ::v-deep #wrapper {
    width: 100vw;
  }
}
</style>
