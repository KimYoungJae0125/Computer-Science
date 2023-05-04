<template>
  <ul>
    <li flat v-on:click="showMenu()" v-for="menu in menuList" :key="menu.id">
      <router-link :to="menu.link">{{ menu.title }} </router-link>
    </li>
  </ul>
</template>

<script>
import { isMobile } from '@/utils/CommonUtils';

export default {
    name: 'SideMenuComponent',
    props: {
        menuList: Array
    },
    data: () => {
        return {
            right: null
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
  text-decoration: underline;
}
ul {
  position: fixed;
  left: 7vw;
  width: 15vw;
  list-style-type: none;
  // background-color: var(--secondary-background-color);
  // min-height: 100vh;
  
  margin-top: 10vh;
  > li {
    padding: 5px;
    min-width: 10vw;
    // margin-top: 10vh;
    font-size: 1.3rem;
  }
}
@media (max-width:800px) {
  ul {
    left: unset;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>