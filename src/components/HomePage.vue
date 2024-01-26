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
        <li><router-link  @click="scrollToTop"  to="/morestuff">More stuff</router-link></li>
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

  <div id="hello">
    Hello, world.
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
    }
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
  
  #hello{
    font-family: var(--title-font-family);
    height: 100vh;
    color: var(--link-hover-color);
    font-size: 100px;
    background-color: var(--background-color);
    display: flex;
    align-items: center; /* Centrage vertical */
    justify-content: center; /* Centrage horizontal */
    text-align: center;
  }

</style>