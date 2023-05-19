<script setup>

import { onMounted, ref } from 'vue'

const count = ref(0);

function increment() {
    count.value++;
    save();
}

function decrement() {
    count.value--;
    save();
}

function save() {
    localStorage.setItem('count', count.value);
}

onMounted(() => {
    const savedCount = parseInt(localStorage.getItem('count'));
    count.value = isNaN(savedCount) ? 0 : savedCount;
})

</script>

<template>
    <span>{{ count }}</span>
    <br>
    <button @click="increment">
        +
    </button>
    <button @click="decrement">
        -
    </button>
</template>