<script setup>
import GradientBackground from './components/GradientBackground.vue';
</script>

<template>
    <main>
        <GradientBackground id="bg" />
        <router-view />
    </main>
</template>

<style scoped>
    main {
        background-color: transparent;
        overflow: hidden;
    }

    #bg {
        position: absolute;
        z-index: -1;
    }
</style>