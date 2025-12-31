<script setup>
import Nav from "./components/Nav.vue"
import Main from "./components/Main.vue"
</script>

<template>
    <nav class="nav" v-if="!$route.meta.hideHeader">
        <Nav></Nav>
    </nav>

    <main class="main" :class="{ 'no-padding': $route.meta.hideHeader }">
        <!-- <Main></Main> -->
         <router-view></router-view>
    </main>
</template>

<style scoped>

main {
    padding-top: 100px; 
    min-height: 100vh;
    background-color: white;
    color: black;
    width: 100%;
}

.main.no-padding {
    padding-top: 0 !important;
}

.nav {
    position: fixed; /* 상단 고정 */
    top: 0;
    width: 100%;
    display: flex; /* 가로 배열 */
    align-items: center;
    padding: 15px 4%;
    background-color: rgba(0, 0, 0, 0.949); /* 배경 반투명 처리 */
    z-index: 1000;
}

</style>
