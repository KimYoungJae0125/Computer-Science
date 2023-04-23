<template>
    <div class="code-block-wrapper">
        <div class="code-block-title">
            <h3>{{ title }}</h3>
            <h3>javascript</h3>
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
    color:black;
    border: 1px solid black;
    
}
.code-block-title {
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #C2BFAF;
}
h3 {
    margin-left: 15px;
    margin-right: 15px;
    font-size: 0.9rem;
    text-align: left;
}
pre::before {
    content: '';
    position: absolute;
    background-color: #e6e6e6;
    border-right: 1px solid #ccc;
    width: 30px;
    height: 100%;
}
pre {
    text-align: left;
    display: flex;
    flex-direction: column;
    
    font-family: monospace;
    padding-bottom: 10px;

    counter-reset: index;
    position: relative;
    background-color: #fafafa;
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