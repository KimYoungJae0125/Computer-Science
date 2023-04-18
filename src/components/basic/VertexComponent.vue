<template>
    <div class="circle">
        {{ content }}
    </div>
</template>

<script>
export default {
    name: "VertexComponent",
    props: {
        content: String
    }
}
</script>

<style scoped>
div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    border: 1px solid black;
    border-radius: 30rem;
    width: 3rem;
    height: 3rem;
}
</style>