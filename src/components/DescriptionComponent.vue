<template>
    <div id="descriptionWrapper">
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

#descriptionWrapper {
  margin-left: 10vw;
  text-align: left;
}

li {
    margin-left: -10px;
    width: 95%;
}

@media (max-width: 800px) {
    #descriptionWrapper {
        margin-left: unset;
    }
}

</style>