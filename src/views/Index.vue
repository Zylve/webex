<script setup>
import InfoBlock from '../components/InfoBlock.vue';
</script>

<template>
    <main>
        <div id="main-area">
            <InfoBlock id="main-block">
                <h1>Vuk Tacic</h1>
                <p id="main-block-info">I'm a 14 year old from Vancouver, BC. Whenever I'm not learning something new you can find me reading a good book or out skiing and hiking on the mountains. I believe that there is something to be learned from everything you experience, and that self-reflection is crucial to living a successful life.</p>
                <p id="main-block-quote">"Show me a man who has never failed and I'll show you a man who has never achieved much."</p>
            </InfoBlock>
            <img id="splash" src="@/assets/img/index/splash.jpg">
        </div>
    </main>
</template>

<style scoped>
    @import '@/assets/css/view.css';

    main {
        display: flex;
        flex-direction: column;
        height: auto;

        background-color: #18122b;
    }

    #main-area {
        display: flex;
        height: 100vh;
        overflow: hidden;
        align-items: center;
    }

    #main-block {
        z-index: 1;
        display: flex;
        flex-direction: column;
        margin-left: 10vw;

        height: 30rem;
        width: 30rem;
        border-radius: 1rem;

        background-color: #251e3a;
        color: white;

        padding: 1rem;
    }

    #main-block-info {
        font-size: 1.2rem;
    }

    #main-block-quote {
        margin-top: auto;
        font-size: 0.8rem;
        color: #635985;
    }

    #splash {
        position: absolute;
        top: 0%;
        right: 0%;

        height: 100vh;
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.667), rgba(0, 0, 0, 0));
        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.667), rgba(0, 0, 0, 0));
    }
</style>
