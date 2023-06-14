<script setup>
import InfoBlock from '../components/InfoBlock.vue';
import detectScroll from '../assets/js/elementInViewport.js'

window.addEventListener('scroll', detectScroll);
</script>

<template>
    <main>
        <div id="main-area" class="area">
            <InfoBlock id="main-block">
                <h1 id="main-block-title">Vuk Tacic</h1>
                <p id="main-block-info">I'm a 14 year old from Vancouver, BC. Whenever I'm not learning something new you can find me reading a good book or out skiing and hiking on the mountains. I believe that there is something to be learned from everything you experience, and that self-reflection is crucial to living a successful life.</p>
                <p id="main-block-quote">"Show me a man who has never failed and I'll show you a man who has never achieved much."</p>
            </InfoBlock>
            <img id="splash" src="@/assets/img/index/splash.jpg">
        </div>
        <div id="skill-area" class="area">
            <InfoBlock id="skill-block" class="fade-element percent-30">
                <h1 id="skill-block-title">Hobbies & Pastimes</h1>
                <div id="skills-area">
                    <InfoBlock class="skill fade-element percent-120">
                        <font-awesome-icon :icon="['fas', 'code']" size="3x" fixed-width class="skill-icon" />
                        <div class="vertical-divider"></div>
                        <div class="skill-container">
                            <h2>Programming</h2>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>4 Years of C#</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>2 Years of Java</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>1 Year of C++</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>6 Months of Javascript</li>
                            </ul>
                        </div>
                    </InfoBlock>
                    <InfoBlock class="skill fade-element percent-120">
                        <font-awesome-icon :icon="['fas', 'person-skiing']" size="3x" fixed-width class="skill-icon" />
                        <div class="vertical-divider"></div>
                        <div class="skill-container">
                            <h2>Alpine Skiing</h2>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>Advanced Skier</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>9 Winters of Experience</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>Off-Piste Enjoyer</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>Freestyle Beginner</li>
                            </ul>
                        </div>
                    </InfoBlock>
                    <InfoBlock class="skill fade-element percent-120">
                        <font-awesome-icon :icon="['fas', 'person-hiking']" size="3x" fixed-width class="skill-icon" />
                        <div class="vertical-divider"></div>
                        <div class="skill-container">
                            <h2>Hiking</h2>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>3 Years of Hiking</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>Grouse Grind in 1 Hour</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>Once Hiked 18km in One Day</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>Scrambling is My Favourite</li>
                            </ul>
                        </div>
                    </InfoBlock>
                    <InfoBlock class="skill fade-element percent-120">
                        <font-awesome-icon :icon="['fas', 'person-biking']" size="3x" fixed-width class="skill-icon" />
                        <div class="vertical-divider"></div>
                        <div class="skill-container">
                            <h2>Biking</h2>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>10 Years of Biking</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>Downhill Bombing</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>Intercity Bike Rides</li>
                            </ul>
                        </div>
                    </InfoBlock>
                </div>
            </InfoBlock>
        </div>
        <div id="project-area" class="area">
            <InfoBlock id="project-block" class="fade-element percent-30">
                <h1 id="project-block-title">Projects</h1>
                <div id="projects-area">
                    <InfoBlock class="project fade-element percent-120">
                        <div class="project-image" />
                        <div class="vertical-divider"></div>
                        <div class="skill-container">
                            <h2>FRC</h2>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>4 Years of C#</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>2 Years of Java</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>1 Year of C++</li>
                                <li><span class="fa-li"><font-awesome-icon :icon="['fas', 'circle']" size="2xs" /></span>6 Months of Javascript</li>
                            </ul>
                        </div>
                    </InfoBlock>
                </div>
            </InfoBlock>
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
        animation: fade-in 1s ease-in-out;
    }

    .area {
        display: flex;
        height: 100vh;
        overflow: hidden;
        align-items: center;

        border-bottom: 2rem solid #443c68;
    }

    #main-block {
        display: flex;
        flex-direction: column;
        margin-left: 10vw;

        height: 30rem;
        width: 30rem;
        padding: 1rem;
        border-radius: 1rem;

        background-color: #251e3a;
        color: white;
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

    #skill-block {
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-top: 5vh;
        margin-bottom: 5vh;

        height: 80vh;
        width: 80vw;
        padding: 1vh 1vw 1vh 1vw;
        border-radius: 3vh;

        background-color: #251e3a;
        color: white;
    }

    #skill-block-title {
        margin-left: auto;
        margin-right: auto;
    }

    #skills-area {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;

        padding: 1rem;
    }

    .skill {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 1vh 1vw 1vh 1vw;

        box-sizing: border-box;

        width: 40%;
        height: 30vh;

        padding: 3vh 2vw 3vh 2vw;
        border-radius: 3vh;

        background-color: #393053;
        color: white;
    }

    .skill-hover {
        transition: background-color 0.4s ease-in-out;
    }

    .skill:hover {
        background-color: #443c68;
    }

    .skill-container {
        height: auto;
    }

    .skill-icon {
        margin-left: 2.5rem;
    }

    .skill .vertical-divider {
        position: relative;
        margin-left: 3vw;
        margin-right: 3vw;

        height: 110%;
        width: 0.25rem;

        background-color: white;
    }

    #project-block {
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-top: 5vh;
        margin-bottom: 5vh;

        height: 80vh;
        width: 80vw;
        padding: 1rem;
        border-radius: 1rem;

        background-color: #251e3a;
        color: white;
    }

    #project-block-title {
        margin-left: auto;
        margin-right: auto;
    }

    #projects-area {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 1rem;
    }

    .project {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 1vh 1vw 1vh 1vw;

        box-sizing: border-box;

        width: 40%;
        height: 30vh;
        border-radius: 3vh;

        background-color: #393053;
        color: white;
    }

    .project-hover {
        transition: background-color 0.4s ease-in-out;
    }

    .project:hover {
        background-color: #443c68;
    }

    .project-container {
        height: auto;
        padding: 1vh 1vw 1vh 1vw;
    }

    .project-image {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        width: 10rem;
        height: 100%;
        border-radius: 3vh 0 0 3vh;

        background-image: url('/src/assets/img/index/frc.jpg');
    }

    .project .vertical-divider {
        position: relative;
        margin-right: 4.5rem;

        height: 100%;
        width: 0.25rem;

        background-color: white;
    }
</style>
