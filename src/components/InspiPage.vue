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
    <li><router-link  @click="scrollToTop"  to="/work">My Work</router-link></li>
    <li><router-link  @click="scrollToTop" class="active"  to="/morestuff">More stuff</router-link></li>
    <li><router-link  @click="scrollToTop"  to="/aboutme">About Me</router-link></li>
  </ul>
  <div class="contact-icons">
    <a href="https://www.linkedin.com/in/galil%C3%A9e-mason-9051861b8/"> <img class="header_icon"  v-bind:src="currentIcon1" @mouseover="currentIcon1 = linkedinTxt" @mouseout="currentIcon1 = linkedinIcon">  </a>
    <a href="https://github.com/Blum3"> <img class="header_icon"  v-bind:src="currentIcon2" @mouseover="currentIcon2 = gitTxt" @mouseout="currentIcon2 = gitIcon">  </a>
  </div>
</nav>

</div>

  <section id="section1">
    <project-preview :project="item" v-for="item in projects" :key="item.id" />
  </section>

</template>


<script>

export default {
  name: "More stuff",
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
          id : 3,
          title : "Pochoirs (Stencils)",
          subtitle : "Playing with color, light and layers",
          description : "Here are some stencils that I make from pictures that, I think, would look good as stencils.",
          last : false,
          first : true,
          pics_only : true,
          slides: [
            {
              image: "/data/inspi/titou.png",
            },
            {
              image: "/data/inspi/prof.png",
            },
            {
              image: "/data/inspi/corn.png",
            },
          ],
        },
        {
          id : 1,
          title : "In the Gamer's Brain",
          subtitle : "Célia Hodent",
          description : "A book that I loved, explaing why understanding the brain is critical when designing a game. Probably the book that got me into user experience in to video games.",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "/data/inspi/itgb.png",
            },
          ],
        },
        {
          id: 2,
          title: "Fin du Game + Game Next Door",
          subtitle: "",
          description: "I don't have the time to play every game releasing, the podcast \"Fin du Game\" is explaining the mechanics and the history behind games. \"Game Next Door\" is a Youtube channel talking about game design, user experience and psychology.",
          last: true,
          pics_only : true,
          slides: [
            {
              image: "/data/inspi/fdggnd.png",
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
</style>