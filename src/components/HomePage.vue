<script setup>

</script>



<template>
  <header>

    <nav>
      <div class="logo">
        <router-link @click="scrollToTop" to="/">Galilée Mason</router-link>
      </div>
      <ul class="menu">
        <li><router-link  @click="scrollToTop"  to="/work">My Work</router-link></li>
        <li><router-link  @click="scrollToTop"  to="/inspirations">Inspirations</router-link></li>
        <li><router-link  @click="scrollToTop"  to="/aboutme">About Me</router-link></li>
      </ul>
      <div class="contact-icons">
        <a href="https://www.linkedin.com/in/galil%C3%A9e-mason-9051861b8/"> <img class="header_icon"  v-bind:src="currentIcon1" @mouseover="currentIcon1 = linkedinTxt" @mouseout="currentIcon1 = linkedinIcon">  </a>
        <a href="https://github.com/Blum3"> <img class="header_icon"  v-bind:src="currentIcon2" @mouseover="currentIcon2 = gitTxt" @mouseout="currentIcon2 = gitIcon">  </a>
      </div>
    </nav>


    <img id="anim" src="/src/images/anim-home.gif">

  </header>

</template>


<script>

export default {
  name: "HomePage",
  data() {
    return {
      linkedinIcon: '/src/images/linkedinicon.png',
      gitIcon: '/src/images/githubicon.png',
      linkedinTxt: '/src/images/linkedintxt.png',
      gitTxt: '/src/images/githubtxt.png',
      currentIcon1: '/src/images/linkedinicon.png',
      currentIcon2: '/src/images/githubicon.png',
    }
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
  #anim{
    width: 15%;
  }
  header {
    height: 101vh;
  }
</style>