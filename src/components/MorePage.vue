<script setup>
import ProjectPreview from "@/components/ProjectPreview.vue";

</script>



<template>
    <div id="header">

<nav>
  <div class="logo">
    <router-link @click="scrollToTop" to="/">Galilée Mason</router-link>
  </div>

  <div class="hamburger">
    <img id="burgericon" src='/images/burger-classic.png' alt="burgermenu" @click="openMenu" v-show="!isMenuOpen">
    <img id="crossicon" src='/images/cross-classic.png' alt="cross" @click="closeMenu" v-show="isMenuOpen">
  </div>

  <ul class="menu">
    <li><router-link  @click="scrollToTop"  to="/work">My Work</router-link></li>
    <li><router-link @click="scrollToTop" to="/games">Games</router-link></li>
    <li><router-link  @click="scrollToTop" class="active" to="/morestuff">More stuff</router-link></li>
    <li><router-link  @click="scrollToTop"  to="/aboutme">About Me</router-link></li>
  </ul>
  <div class="contact-icons">
    <a href="https://www.linkedin.com/in/galil%C3%A9e-mason-9051861b8/"> <img class="header_icon"  v-bind:src="currentIcon1" @mouseover="currentIcon1 = linkedinTxt" @mouseout="currentIcon1 = linkedinIcon">  </a>
    <a href="https://github.com/Blum3"> <img class="header_icon"  v-bind:src="currentIcon2" @mouseover="currentIcon2 = gitTxt" @mouseout="currentIcon2 = gitIcon">  </a>
  </div>
</nav>

</div>

<div class="side-menu" :class="{ 'menu-open': isMenuOpen }">
<ul>
    <li><router-link  @click="scrollToTop"  to="/work">My Work</router-link></li>
    <li><router-link @click="scrollToTop" to="/games">Games</router-link></li>
    <li><router-link  @click="scrollToTop"  to="/morestuff">More stuff</router-link></li>
    <li><router-link  @click="scrollToTop"  to="/aboutme">About Me</router-link></li>
    <li>
      <a href="https://www.linkedin.com/in/galil%C3%A9e-mason-9051861b8/"> <img class="side_icon"  v-bind:src="currentIcon1" @mouseover="currentIcon1 = linkedinTxt" @mouseout="currentIcon1 = linkedinIcon">  </a>
    </li>
    <li>
      <a href="https://github.com/Blum3"> <img class="side_icon"  v-bind:src="currentIcon2" @mouseover="currentIcon2 = gitTxt" @mouseout="currentIcon2 = gitIcon">  </a>
    </li>
  </ul>
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
      isMenuOpen: false,
      projects : [
      {
          id : 3,
          title : "Pochoirs (Stencils)",
          subtitle : "Spraypaint, Photoshop",
          description : "Here are some stencils that I make from pictures that, I think, would look good as stencils. I'm having fun playing with colors, light and layers",
          last : false,
          first : true,
          pics_only : true,
          slides: [
            {
              image: "/data/more/titou.png",
            },
            {
              image: "/data/more/prof.png",
            },
            {
              image: "/data/more/corn.png",
            },
          ],
        },
        {
          id : 2,
          title : "Tarot Cards",
          subtitle : "Paper, Photoshop",
          description : "These are some of the cards I tried making after being fascinated by the story and the design of the Rider-Waite Tarot. I'm planning to finish these 22 cards and print them.",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "/data/more/tarot1.png",
            },
            {
              image: "/data/more/tarot2.png",
            },
          ],
        },
        {
          id: 1,
          title: "From photos to flags",
          subtitle: "Photoshop",
          description: "While walking in my city, I tried to transform the shapes and the colors from construction machines into flags. I've always been crazy about emblems, squad logos, country and county colors, so i had a lot of fun doing this.",
          last: true,
          pics_only : true,
          slides: [
            {
              image: "/data/more/flag1.png",
            },
            {
              image: "/data/more/flag2.png",
            },
            {
              image: "/data/more/flag3.png",
            },
            {
              image: "/data/more/flag4.png",
            }
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
    },
    closeMenu() {
      // Hide the side menu and cross icon, hide the burger icon
      this.isMenuOpen = false;
    },
    openMenu() {
      // Show the side menu and cross icon, show the burger icon
      this.isMenuOpen = true;
    },
  },
};
</script>

<style scoped>
  @import url('../assets/App.css');
</style>