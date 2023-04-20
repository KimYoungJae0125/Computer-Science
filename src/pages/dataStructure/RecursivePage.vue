<template>
    <div id="wrapper">
        <h2>{{ title }}</h2>
        <RecursiveComponent />
    </div>
</template>

<script>
import RecursiveComponent from '@/components/dataStructure/recursive/RecursiveComponent.vue';

export default {
    name: "RecursivePage",
    components: {
        RecursiveComponent,
    },
    props: {
        title: String,
    },
}

</script>