<template>
    <div>
        <div class="code-block-title">
            <h3>{{ title }}</h3>
        </div>
        <pre>
            <code v-for="(code, index) in codes" :key="index">{{ code }}</code>
        </pre>
    </div>
</template>

<script>

export default {
    name: 'CodeBlockComponent',
    props: {
        title: String,
        codes: Array
    }
}

</script>

<style scoped>
.code-block-title, pre {
    width: 40vw;
    max-width: 500px;
}
.code-block-title {
    text-align: left;
    border: 1px solid #ccc;
    border-radius: 5px 5px 0 0;
}
h3 {
    margin-left: 15px;
    font-size: 0.9rem;
}
pre::before {
    content: '';
    position: absolute;
    background-color: #e6e6e6;
    border-right: 1px solid #ccc;
    width: 30px;
    height: 100%;
    z-index: -99990;
}
pre {
    text-align: left;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    font-family: monospace;

    padding: 0;
    counter-reset: index;
    position: relative;
    background-color: #fafafa;
    z-index: -99999;

}
pre code::before {
    counter-increment: index;
    content: counter(index);
    position: absolute;
    text-align: right;
    width: 30px;
    margin-left: -45px;
}
pre code {
    margin-left: 40px;
}

@media (max-width:800px) {
    .code-block-title, pre {
        width: 80vw;
    }
}

</style>