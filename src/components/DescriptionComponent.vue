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
div {
    padding-top: 1vh;
    padding-bottom: 2vh;
    text-align: left;
}
ul {
    padding-top: 1vh;
}
li {
    max-width: 500px;
}

@media (max-width:800px) {
    li {
        max-width: 80vw;
    }
    
}

</style>