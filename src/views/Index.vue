<script setup>
import NumberCounter from '@/components/NumberCounter.vue';
</script>

<template>
    <main>
        <div id="router-links">
            <router-link to="/">Go to Home</router-link>
            <router-link to="/about">Go to About</router-link>
        </div>
        <NumberCounter id="counter" />
    </main>
</template>

<style scoped>
    main {
        align-items: center;
        justify-content: center;
    }

    #counter {
        display: flex;
        align-items: center;
        justify-content: center;
    }


    #router-links {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
    }

    #router-links > :not(:last-child) {
        margin-right: 1rem;
    }
</style>
