<script setup>
import Header from '@/components/Header.vue'
import NumberCounter from '@/components/NumberCounter.vue';
</script>

<template>
    <main>
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
