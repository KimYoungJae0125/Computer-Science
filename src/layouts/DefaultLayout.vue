<template>
  <div>
    <MainMenuComponent v-if="!isMobile" />
    <MobileMainMenuComponet v-else />
    <router-view />
  </div>
</template>

<script>
import MainMenuComponent from '@/components/MainMenuComponent.vue'
import MobileMainMenuComponet from '@/components/MobileMainMenuComponent.vue'

import { isMobile } from '@/utils/CommonUtils';


export default {
  name: 'DefaultLayout',
  components: {
    MainMenuComponent,
    MobileMainMenuComponet
  },
  data: () => {
    return {
      isMobile: isMobile()
    }
  }
}
</script>

<style scoped>
div {
  height: 100vh;
  background-color: var(--secondary-background-color);
}
</style>