<template>
    <ul class="menu-ul">
        <li class="menu-li" v-for="menu in menuList" :key="menu.id">
            <router-link class="menu-a" :to="menu.link">{{ menu.title }} </router-link>
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