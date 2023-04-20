<template>
  <div>
    <MainMenuComponent />
    <router-view />
  </div>
</template>

<script>
import MainMenuComponent from '@/components/MainMenuComponent.vue'

export default {
  name: 'DefaultLayout',
  components: {
    MainMenuComponent
  }
}
</script>