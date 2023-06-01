<script setup>
import InfoBlock from '../components/InfoBlock.vue';
</script>

<template>
    <main>
        <InfoBlock id="main-block">
            <h1>Vuk Tacic</h1>
            <p>A human</p>
        </InfoBlock>
    </main>
</template>

<style scoped>
    @import '@/assets/css/view.css';

    main {
        background-color: #1c1c1c;
    }

    #main-block {
        display: flex;
        flex-direction: column;
        margin-left: 5rem;

        height: 30rem;
        width: 30rem;
        border-radius: 1rem;

        background-color: #252525;
        color: white;

        padding: 1rem;
    }
</style>
