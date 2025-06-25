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
                <p id="main-block-info">I'm a 16 year old from Vancouver, BC.</p>
            </InfoBlock>
            <img id="main-splash" src="@/assets/img/index/main-splash.jpg">
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
                                I do a lot of programming. Mainly robotics related however I am getting into embedded development
                            </ul>
                        </div>
                    </InfoBlock>
                    <InfoBlock class="skill fade-element percent-120">
                        <font-awesome-icon :icon="['fas', 'person-skiing']" size="3x" fixed-width class="skill-icon" />
                        <div class="vertical-divider"></div>
                        <div class="skill-container">
                            <h2>Skiing</h2>
                            <ul class="fa-ul">
                                Skiing is sick. Not that great at freestyling but I know how to have a good time on terrain.
                            </ul>
                        </div>
                    </InfoBlock>
                    <InfoBlock class="skill fade-element percent-120">
                        <font-awesome-icon :icon="['fas', 'person-hiking']" size="3x" fixed-width class="skill-icon" />
                        <div class="vertical-divider"></div>
                        <div class="skill-container">
                            <h2>Hiking</h2>
                            <ul class="fa-ul">
                                Garibaldi is amazing for hiking and backpacking. I try to go on trips with my friends but it's hard to find time :(.
                            </ul>
                        </div>
                    </InfoBlock>
                    <InfoBlock class="skill fade-element percent-120">
                        <font-awesome-icon :icon="['fas', 'person-biking']" size="3x" fixed-width class="skill-icon" />
                        <div class="vertical-divider"></div>
                        <div class="skill-container">
                            <h2>Mountain Biking</h2>
                            <ul class="fa-ul">
                                Mountain Biking is dope. I got a sick 2019 Norco Range and I've been ripping it on the local trails.
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
                        <div class="project-image" style="background-image: url('/static/img/frc.jpg');" />
                        <div class="project-container">
                            <h2>FRC</h2>
                            Pres. FRC is amazing.
                        </div>
                    </InfoBlock>
                    <InfoBlock class="project fade-element percent-120">
                        <div class="project-image" style="background-image: url('/static/img/downtown-vancouver.jpg'); background-position: 40% 0%;" />
                        <div class="project-container">
                            <h2>Downtown Vancouver</h2>
                            Cool 1:20000 model I 3D printed a couple years ago.
                        </div>
                    </InfoBlock>
                    <InfoBlock class="project fade-element percent-120">
                        <div class="project-image" style="background-image: url('/static/img/ict.jpg');" />
                        <div class="project-container">
                            <h2>ICT Projects</h2>
                            <p>You can find my ICT websites <a href="/ict/ict.html" target="_blank" rel="noopener">here</a>.</p>
                            <p>You can find my non-website ICT assignments <a href="/ict/productions website/index.html" target="_blank" rel="noopener">here</a>.</p>
                        </div>
                    </InfoBlock>
                </div>
            </InfoBlock>
        </div>
        <div id="contact-area" class="area">
            <InfoBlock id="contact-block" class="fade-element percent-30">
                <h1 id="contact-block-title">Contact Me</h1>
                <ul class="fa-ul">
                    <li><a href="mailto:vuk.tacic@gmail.com" target="_blank" rel="noopener noreferrer"><span class="fa-li"><font-awesome-icon :icon="['fas', 'envelope']" size="l" /></span>vuk.tacic@gmail.com</a></li>
                    <li><a href="https://github.com/Zylve" target="_blank" rel="noopener noreferrer"><span class="fa-li"><font-awesome-icon :icon="['fab', 'github']" size="l" /></span>Zylve</a></li>
                    <li><a href="https://discordapp.com/users/664237290066804766" target="_blank" rel="noopener noreferrer"><span class="fa-li"><font-awesome-icon :icon="['fab', 'discord']" size="l" /></span>@vuktc</a></li>
                    <li><a href="https://www.instagram.com/vuk.tc/" target="_blank" rel="noopener noreferrer"><span class="fa-li"><font-awesome-icon :icon="['fab', 'instagram']" size="l" /></span>@vuk.tc</a></li>
                </ul>
            </InfoBlock>
            <img id="contact-splash" src="@/assets/img/index/about-splash.jpg">
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

    a:link {
        color: #dddddd;
    }

    a:visited {
        color: #635985;
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

    #main-splash {
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
        margin-right: 2vw;
        width: 50%;
    }

    .project-image {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        width: 9vw;
        height: 100%;
        border-radius: 3vh 0 0 3vh;
        
        transition: filter 0.4s ease-in-out;
        border-right: 0.25rem solid white;
        margin-right: 4.5rem;
    }

    .project:hover .project-image {
        filter: brightness(125%);
    }

    #contact-area {
        position: relative;
    }

    #contact-block {
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

    #contact-block .fa-ul {
        font-size: 1.4rem;
    }

    #contact-block .fa-ul a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease-in-out;
    }

    #contact-block .fa-ul a:hover {
        color: #bbbbbb;
    }

    #contact-splash {
        position: absolute;
        top: 0%;
        right: 0%;

        height: 100vh;
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.667), rgba(0, 0, 0, 0));
        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.667), rgba(0, 0, 0, 0));
    }
</style>
