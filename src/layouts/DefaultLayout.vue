<template>
  <div>
    <ToolbarComponent />
    <router-view />
  </div>
</template>

<script>
import ToolbarComponent from '@/components/ToolbarComponent.vue';

import { isMobile } from '@/utils/CommonUtils';


export default {
  name: 'DefaultLayout',
  components: {
    ToolbarComponent,
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