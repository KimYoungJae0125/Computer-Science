<template>
    <ul class="menu-ul">
        <li v-on:click="showMenu()" v-for="menu in menuList" :key="menu.id">
            <router-link v-if="menu.link == '/'" to="/" exact>{{ menu.title }}</router-link>
            <router-link v-else :to="menu.link">{{ menu.title }} </router-link>
        </li>
    </ul>
</template>

<script>

import { isMobile } from '@/utils/CommonUtils';

export default {
    name: 'MenuComponent',
    props: {
        menuList: Array
    },
    methods: {
        showMenu() {
            if(isMobile()) {
                this.$parent.showMenu()
            }
        }
    }
}

</script>