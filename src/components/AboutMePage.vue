<script setup>

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
      <li><router-link  @click="scrollToTop"  to="/morestuff">More stuff</router-link></li>
      <li><router-link  @click="scrollToTop" class="active" to="/aboutme">About Me</router-link></li>
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

  <div class="aboutme">
    <img src="/images/me2.png" class="picofme">
    <p>
      My name is Galilée Mason, I am a 22 years old student in M2 Human Computer Interaction. I am looking for an internship from 25/03/2024 to 25/09/2024.
    </p>
    <p>
      Skills :
      C,
      C#,
      HTML,
      CSS,
      Javascript,
      Photoshop,
      Premiere Pro,
      Unity,
      Java,
      Vue.js,
      User Centered Design,
    </p>
    <p>
      <a target=”_blank” href="/other/Mason-CV-English.pdf">
        My resume in english
      </a>
      <br>
      <a target=”_blank” href="/other/Mason-CV-Francais.pdf">
        Mon CV en français
      </a>
    </p>
    <p>
      Contact :
      <br> mason.galilee@gmail.com
      <br> +33 6 84 81 14 42
      <br>
      <br>
    </p>
  </div>


</template>


<script>

export default {
  name: "HomePage",
  data() {
    return {
      linkedinIcon: "/images/linkedinicon.png",
      gitIcon: '/images/githubicon.png',
      linkedinTxt: '/images/linkedintxt.png',
      gitTxt: '/images/githubtxt.png',
      currentIcon1: '/images/linkedinicon.png',
      currentIcon2: '/images/githubicon.png',
      isMenuOpen: false,
    };
  },
  methods: {
    scroll: function () {
      document.getElementById('section1').scrollIntoView({
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