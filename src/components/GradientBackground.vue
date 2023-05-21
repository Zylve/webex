<script setup>
import { onMounted, reactive } from 'vue';

const gradientStyle = reactive({
    height: '100vh',
    width: '100vw',

    background: 'linear-gradient(135deg, hsl(0, 100%, 50%), hsl(60, 100%, 50%))'
});

const interval = 25;

function createGradient(hue) {
    const color1 = `hsl(${hue}, 100%, 50%)`;
    const color2 = `hsl(${(hue + 60) % 360}, 100%, 50%)`;
    gradientStyle.background = `linear-gradient(135deg, ${color1}, ${color2})`;
}

let hue = 0;
function cycleGradient() {
    hue = (hue + 1) % 360;
    createGradient(hue);
}

onMounted(() => {
    setInterval(cycleGradient, interval);
});

</script>

<template>
    <main id="main">
        <div id="background" :style="gradientStyle" />
    </main>
</template>

<style scoped>
</style>