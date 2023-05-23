<script setup>

const props = defineProps({
    title: {
        type: String,
        default: 'title'
    }
});

console.log(props.title)

</script>

<template>
    <main id="main">
        <p>{{ props.title }}</p>
    </main>
</template>

<style scoped>
    main {
        height: 3rem;
    }

    p {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
    }
</style>