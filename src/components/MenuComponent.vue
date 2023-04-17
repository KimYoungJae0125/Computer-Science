<template>
    <ul>
        <li v-for="menu in menuList" :key="menu.id">
            <router-link :to="menu.link">{{ menu.title }} </router-link>
        </li>
    </ul>
</template>

<script>

export default {
    name: 'MenuComponent',
    props: {
        menuList: Array
    }
}

</script>