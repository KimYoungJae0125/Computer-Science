<template>
    <div>
        <h2>{{ title }}</h2>
            <div id="descriptionWrapper">
            <h3>기본 개념</h3>
            <ul>
                <li v-for="(description, index) in descriptions" :key="index">
                {{ description }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DfsBfsComponent',
    props: {
        title: String,
        descriptions: Array
    },

}

</script>

<style scoped>
#descriptionWrapper {
  margin-left: 10vw;
  text-align: left;
}
</style>