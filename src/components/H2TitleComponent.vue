<template>
    <h2>{{  title  }}</h2>
</template>

<script>

export default {
  name: 'H2TitleComponent',
  props: {
    title: String
  }
}
</script>

<style scoped>
h2 {
  color: var(--title-font-color);
  padding-top: 20px;
}
</style>