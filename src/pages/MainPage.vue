<template>
  <div id="wrapper">
    <TitleComponent :title=title />
  </div>
</template>

<script>
import TitleComponent from '@/components/TitleComponent.vue';

export default {
  name: 'MainPage',
  components: {
    TitleComponent
  },  
  props: {
    title: String
  }
}
</script>