<script setup>
import ProjectPreview from "@/components/ProjectPreview.vue";

</script>



<template>
  <header>

    <nav>
      <div class="logo">
        <router-link @click="scrollToTop" to="/">Galilée Mason</router-link>
      </div>
      <ul class="menu">
        <li><router-link  @click="scrollToTop" class="active" to="/work">My Work</router-link></li>
        <li><router-link  @click="scrollToTop"  to="/inspirations">Inspirations</router-link></li>
        <li><router-link  @click="scrollToTop"  to="/aboutme">About Me</router-link></li>
      </ul>
      <div class="contact-icons">
        <a href="https://www.linkedin.com/in/galil%C3%A9e-mason-9051861b8/"> <img class="header_icon"  v-bind:src="currentIcon1" @mouseover="currentIcon1 = linkedinTxt" @mouseout="currentIcon1 = linkedinIcon">  </a>
        <a href="https://github.com/Blum3"> <img class="header_icon"  v-bind:src="currentIcon2" @mouseover="currentIcon2 = gitTxt" @mouseout="currentIcon2 = gitIcon">  </a>
      </div>
    </nav>

  </header>

  <section id="section1">
    <project-preview :project="item" v-for="item in projects" :key="item.id" />
  </section>

</template>


<script>

export default {
  name: "ArtPage",
  data() {
    return {
      linkedinIcon: '/src/images/linkedinicon.png',
      gitIcon: '/src/images/githubicon.png',
      linkedinTxt: '/src/images/linkedintxt.png',
      gitTxt: '/src/images/githubtxt.png',
      currentIcon1: '/src/images/linkedinicon.png',
      currentIcon2: '/src/images/githubicon.png',

      projects : [
        {
          id : 1,
          title : "SmartPhOx",
          subtitle : "SmartPhox : a mobile app for measuring oxygen level in blood (2023)",
          description :
              "This product is being designed as part of a “Project” course during the second semester of my HCI Master.\n" +
              "\n" +
              "I am working with 3 others students. We are working with a client, he already have a working algorithm and we are in charge of designing a graphic chart (extracts on the right) and a mobile app and implement it.\n" +
              "\n" +
              "During this project, I used Photoshop and Balsamiq. This project is still under development\n" +
              "\n",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "src/data/sp/smartphox1.png",
              title: null,
              description: null
            },
            {
              image: "src/data/sp/smartphox2.png",
              title: null,
              description: null
            },
            {
              image: "src/data/sp/smartphox3.png",
              title: null,
              description: null
            },
            {
              image: "src/data/sp/smartphox4.png",
              title: null,
              description: null
            },
          ],
        },
        {
          id : 2,
          title : "EKO",
          subtitle : "a pixel art 2D platformer (2022)",
          description : "Work In Progress : This project is still under development\n" +
              "\n" +
              "I wanted to create a 2D platformer with a fun and musical gameplay\n" +
              "\n" +
              "This project was very interesting because I had to do everything, programming, level design, art, animations, etc…\n" +
              "\n" +
              "During this project, I used Unity, and Photoshop, programming was done in C#.",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "src/data/eko/ekodemo.gif",
              title: null,
              description: null
            },
            {
              image: "src/data/eko/eko.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/eko/eko1.jpg",
              title: null,
              description: null
            },
          ],
        },
        {
          id : 3,
          title : "MotUPS",
          subtitle : "a website recreating the famous game Motus (2022)",
          description :
              "This project was conducted during the first semester of my master\n" +
              "\n" +
              "I had the chance to work with 2 other students on this project, it was a really good and pleasant experience since the workload was well distributed and the communication was efficient. We used a request system with a data base to find and verify the words.\n" +
              "\n" +
              "During this project, I used Vue.js, Node.js and Github, programming was done in Javascript, HTML and CSS. ",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "src/data/motups/motups1.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/motups/motups2.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/motups/motups3.jpg",
              title: null,
              description: null
            },
          ],
        },
        {
          id : 4,
          title : "CyberPunk : Fixer",
          subtitle : "interface design for a game (2022)",
          description :
              "I loved playing Cyberpunk 2077 and watching Cyberpunk Edgerunners. So in 2022, during my first year as a Human Computer Interaction student, I decided to design and program an interface for a card game in this universe.\n" +
              "\n" +
              "I tried to apply concepts learned during my courses, but also got inspiration and advices from UI/UX Youtube channels and from Celia Hodent’s book : The Gamer’s Brain.\n" +
              "\n" +
              "During this project, I used Unity and Photoshop, programming was done in C#.",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "src/data/cp/cp1.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/cp/cp2.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/cp/cp3.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/cp/cp4.jpg",
              title: null,
              description: null
            },
          ],
        },
        {
          id : 5,
          title : "Reality Escape",
          subtitle : "a mobile game in augmented reality (2022)",
          description :
              "Reality escape is an escape game in augmented reality playable with your phone. I created this application during the course “Augmented Reality Applications and Theoretical Foundations” at HTW Berlin in 2022.\n" +
              "\n" +
              "During this project, I used Unity, Photshop and Vuforia, programming was done in C#.",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "src/data/re/re1.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/re/re2.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/re/re3.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/re/re4.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/re/re5.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/re/re6.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/re/re7.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/re/re8.jpg",
              title: null,
              description: null
            },
          ],
        },
        {
          id : 6,
          title : "CryptoKnights",
          subtitle : "a website for a NFT collection (2021)",
          description :
              "CryptoKnights is a chess NFT collections created by a friend of mine. I happily designed the website for his project in 2021.\n" +
              "\n" +
              "During this project, I used Photshop, programming was done in HTML/CSS.",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "src/data/ck/ck1.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/ck/ck2.jpg",
              title: null,
              description: null
            },
          ],
        },
        {
          id : 7,
          title : "Pong",
          subtitle : "a tribute website (2019)",
          description :
              "Pong is a website realized for a computer science course’s final project during my last year in high school.\n" +
              "\n" +
              "During this project, programming was done in HTML/CSS.",
          last : true,
          pics_only : true,
          slides: [
            {
              image: "src/data/pong/pong1.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/pong/pong2.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/pong/pong3.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/pong/pong4.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/pong/pong5.jpg",
              title: null,
              description: null
            },
          ],
        },
      ]
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
};
</script>

<style scoped>
  @import url('../assets/style1.css');
  header{
    height: 0px;
  }
</style>