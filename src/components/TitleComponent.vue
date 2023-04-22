<template>
    <h1>{{  title  }}</h1>
</template>

<script>

export default {
  name: 'TitleComponent',
  props: {
    title: String
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.8rem;
  border-bottom: 1px solid #ccc;
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--title-font-color);
}
</style>