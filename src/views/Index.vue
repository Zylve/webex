<script setup>
import GradientBackground from '@/components/GradientBackground.vue'
import Header from '@/components/Header.vue'
import NumberCounter from '@/components/NumberCounter.vue';
</script>

<template>
    <main>
        <GradientBackground id="bg" />
        <Header id="header" />
        <NumberCounter id="counter" />
    </main>
</template>

<style scoped>
    @import '@/assets/css/view.css';

    main {
        align-items: center;
        justify-content: center;
    }

    #counter {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
