<script setup>
import ProjectPreview from "@/components/ProjectPreview.vue";

</script>



<template>
  <div id="header">

    <nav>
      <div class="logo">
        <router-link @click="scrollToTop" to="/">Galilée Mason</router-link>
      </div>
      <ul class="menu">
        <li><router-link  @click="scrollToTop" class="active" to="/work">My Work</router-link></li>
        <li><router-link  @click="scrollToTop"  to="/morestuff">More stuff</router-link></li>
        <li><router-link  @click="scrollToTop"  to="/aboutme">About Me</router-link></li>
      </ul>
      <div class="contact-icons">
        <a href="https://www.linkedin.com/in/galil%C3%A9e-mason-9051861b8/"> <img class="header_icon"  v-bind:src="currentIcon1" @mouseover="currentIcon1 = linkedinTxt" @mouseout="currentIcon1 = linkedinIcon">  </a>
        <a href="https://github.com/Blum3"> <img class="header_icon"  v-bind:src="currentIcon2" @mouseover="currentIcon2 = gitTxt" @mouseout="currentIcon2 = gitIcon">  </a>
      </div>
    </nav>

  </div>

  <section id="main_section">
    <project-preview :project="item" v-for="item in projects" :key="item.id"/>
  </section>


</template>


<script>

export default {
  name: "WorkPage",
  data() {
    return {
      linkedinIcon: '/images/linkedinicon.png',
      gitIcon: '/images/githubicon.png',
      linkedinTxt: '/images/linkedintxt.png',
      gitTxt: '/images/githubtxt.png',
      currentIcon1: '/images/linkedinicon.png',
      currentIcon2: '/images/githubicon.png',

      projects : [
      {
          id : 6,
          title : "Local Link",
          subtitle : "a design bootcamp project (2023)",
          description : "The first week of my master, we had to design a system corresponding to a wide subject we were given. During this week, I learned how to organize effective brainstormings, paper and video prototypes, experience maps, storyboards and many more things. It was very interesting and I learned a lot.",
          last : false,
          first : true,
          pics_only : true,
          slides: [
            {
              image: "/data/LL/LL1.png",
            },
            {
              image: "/data/LL/LL2.png",
            },
            {
              image: "/data/LL/LL3.png",
            },
            {
              image: "/data/LL/LL4.png",
            },
            {
              image: "/data/LL/LL5.png",
            },
          ],
        },
      {
          id : 5,
          title : "Night City Builder",
          subtitle : "a unity prototype (2023)",
          description :
            "I am in love with city builders, management, strategy, 4X games. So I naturally tried to create the skeleton of what could be my next big personnal project.\n" +
                "\n" +
                "During this project, I am using Unity so programming is done in C#. This project is still under development.\n" +
                "\n",          
          last : false,
          first : true,
          pics_only : true,
          slides: [
          {
              image: "/data/city/city0.png",
              title: null,
              description: null
            },
            {
              image: "/data/city/city1.png",
              title: null,
              description: null
            },
            {
              image: "/data/city/city2.gif",
              title: null,
              description: null
            },
            {
              image: "/data/city/city3.gif",
              title: null,
              description: null
            },
          ],
        },
        {
          id : 4,
          title : "SmartPhOx",
          subtitle : "a health mobile app (2023)",
          description :
              "This product was being designed as part of a “Project” course during the second semester of my HCI Master.\n" +
              "\n" +
              "I was working with 3 others students. We were working with a client, we had to create a graphic chart and a mobile app and implement it.\n" +
              "\n" +
              "During this project, I did low fidelity prototypes, a state of the art, a poster and used Photoshop and Balsamiq.\n" +
              "\n",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "/data/sp/sfff.png",
              title: null,
              description: null
            },
            {
              image: "/data/sp/smartphox1.png",
              title: null,
              description: null
            },
            {
              image: "/data/sp/smartphox2.png",
              title: null,
              description: null
            },
            {
              image: "/data/sp/smartphox3.png",
              title: null,
              description: null
            },
            {
              image: "/data/sp/smartphox4.png",
              title: null,
              description: null
            },
            {
              image: "/data/sp/sp99.png",
              title: null,
              description: null
            }
          ],
        },
        {
          id : 3,
          title : "EKO",
          subtitle : "a pixel art 2D platformer (2022)",
          description :
              "I wanted to create a 2D platformer with a fun and musical gameplay\n" +
              "\n" +
              "This project was very interesting because I had to do everything, programming, level design, art, animations, etc…\n" +
              "\n" +
              "During this project, I used Unity, and Photoshop, programming was done in C#.",
          last : false,
          pics_only : true,
          slides: [
          {
              image: "/data/eko/eko0.png",
              title: null,
              description: null
            },
            {
              image: "/data/eko/eko.jpg",
              title: null,
              description: null
            },
            {
              image: "/data/eko/ekodemo.gif",
              title: null,
              description: null
            },
          ],
        },
        {
          id : 2,
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
              image: "/data/cp/cp0.png",
              title: null,
              description: null
            },
          {
              image: "/data/cp/cp4.jpg",
              title: null,
              description: null
            },
            {
              image: "/data/cp/cp1.jpg",
              title: null,
              description: null
            },
            {
              image: "/data/cp/cp3.jpg",
              title: null,
              description: null
            },
            {
              image: "/data/cp/cp2.jpg",
              title: null,
              description: null
            },
            
          ],
        },
        {
          id : 1,
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
              image: "/data/re/re3.jpg",
              title: null,
              description: null
            },
            {
              image: "/data/re/re1.jpg",
              title: null,
              description: null
            },
            {
              image: "/data/re/re2.jpg",
              title: null,
              description: null
            },
            {
              image: "/data/re/re4.jpg",
              title: null,
              description: null
            },
            {
              image: "/data/re/re5.jpg",
              title: null,
              description: null
            },
          ],
        }
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
  @import url('../assets/App.css');
  header{
    height: 0px;
  }
</style>