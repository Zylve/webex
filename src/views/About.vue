<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
    <main>
        <Header id="header" />
        <div id="content">
            <h1>About</h1>
        </div>
    </main>
</template>

<style scoped>
    @import '@/assets/css/header.css';
    @import '@/assets/css/view.css';

    #content {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
</style>