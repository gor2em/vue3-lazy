<script setup>
import Navbar from './components/Navbar.vue';

</script>
<template>

    <div class="min-h-screen  bg-slate-900">

        <Navbar />

        <div class="container mx-auto">
            <router-view></router-view>
        </div>

    </div>

</template>
<style scoped>

</style>