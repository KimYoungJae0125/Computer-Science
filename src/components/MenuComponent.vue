<template>
    <ul class="menu-ul">
        <li v-for="menu in menuList" :key="menu.id">
            <router-link v-if="menu.link == '/'" to="/" exact>{{ menu.title }}</router-link>
            <router-link v-else :to="menu.link">{{ menu.title }} </router-link>
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