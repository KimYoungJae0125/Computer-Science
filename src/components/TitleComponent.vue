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
}
</style>