<template>
    <div id="wrapper">
        <TitleComponent :title="title" />
        <RecursiveComponent />
    </div>
</template>

<script>
import TitleComponent from '@/components/TitleComponent.vue';
import RecursiveComponent from '@/components/dataStructure/recursive/RecursiveComponent.vue';

export default {
    name: "RecursivePage",
    components: {
        TitleComponent,
        RecursiveComponent,
    },
    props: {
        title: String,
    },
}

</script>