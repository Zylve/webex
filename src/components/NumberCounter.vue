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
    <main>
        <div>
            <span>{{ count }}</span>
            <br>
            <button
                id="decrement"
                @click="decrement"
            >
                -
            </button>
            
            <button
                id="increment"
                @click="increment"
            >
                +
            </button>
        </div>
    </main>
</template>

<style scoped>
    div {
        text-align: center;
    }

    span {
        font-size: 5rem;
    }

    button#increment {
        margin-left: 10px;
    }

    button {
        background-color: orangered;
        color: white;

        font-size: 1.5rem;
        padding-left: 100px;
        padding-right: 100px;

        border: none;
        border-radius: 20px;
    }
</style>