<template>
    <div>
        <h3>{{ title }}</h3>
        <ul>
            <li v-for="(description, index) in descriptions" :key="index">
                {{ description }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "DescriptionComponent",
    props: {
        title: String,
        descriptions: Array
    }
}

</script>

<style scoped>
h3 {
    color: var(--title-font-color);
}
div {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: left;
}
ul {
    padding-top: 10px;
    padding-bottom: 10px;
}
li {
    max-width: 500px;
    width: 40vw;
    color: var(--description-font-color) !important;
}

@media (max-width:800px) {
    li {
        max-width: 80vw;
    }
    
}

</style>