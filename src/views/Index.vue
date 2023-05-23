<script setup>
import Header from '@/components/Header.vue'
import Title from '../components/Title.vue';
</script>

<template>
    <main>
        <Header id="header" />
        <div id="board">
            <Title title="Zylve.me" />
            <p>Zylve.me</p>
        </div>
    </main>
</template>

<style scoped>
    @import '@/assets/css/header.css';
    @import '@/assets/css/view.css';

    main {
        align-items: center;
        justify-content: center;

        display: flex;
        flex-direction: column;
    }

    #board {
        background-color: white;
        width: 75vw;
        height: 75vh;
        border-radius: 1rem;
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.5);
        border: 5px solid black;
    }

    #header {
        position: absolute;
        top: 0px;
    }

</style>
