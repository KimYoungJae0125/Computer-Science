<template>
  <div class="hello">
      <aside>
        <MenuComponent :menuList="subMenuList" />
      </aside>
      <router-view />
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
<style scoped type="scss">
aside {
  position: fixed;
  left: 5vw;
}
h3 {
  margin: 40px 0 0;
}
::v-deep .menu-ul {
  list-style-type: none;
  padding: 0;
}
::v-deep .menu-li {
  width: 100%;
  margin-top: 10vh;
  font-size: 2rem;
}
::v-deep .menu-a {
  color: #669881;
}
</style>
