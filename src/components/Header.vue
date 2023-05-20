<script setup>

</script>

<template>
    <main id="main">
        <div id="router-links">
            <router-link to="/">Go to Home</router-link>
            <router-link to="/about">Go to About</router-link>
        </div>
    </main>
</template>

<style scoped>
    #router-links {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #router-links > :not(:last-child) {
        margin-right: 1rem;
    }
</style>