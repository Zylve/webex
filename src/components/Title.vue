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
    <p>{{ props.title }}</p>
</template>

<style scoped>
    p {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
    }
</style>