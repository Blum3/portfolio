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
        <li><router-link  @click="scrollToTop" class="active" to="/aboutme">About Me</router-link></li>
      </ul>
      <div class="contact-icons">
        <a href="https://www.linkedin.com/in/galil%C3%A9e-mason-9051861b8/"> <img class="header_icon"  v-bind:src="currentIcon1" @mouseover="currentIcon1 = linkedinTxt" @mouseout="currentIcon1 = linkedinIcon">  </a>
        <a href="https://github.com/Blum3"> <img class="header_icon"  v-bind:src="currentIcon2" @mouseover="currentIcon2 = gitTxt" @mouseout="currentIcon2 = gitIcon">  </a>
      </div>
    </nav>

  </header>

  <div class="aboutme">
    <img src="/src/images/me.png" class="picofme">
    <p>
      My name is Galilée Mason, I am a 21 years old student at UT3 Paul Sabatier in M1 Human Machine Interaction. I am looking for an internship in UI/UX from 02/05/2022 to 01/08/2022.
    </p>
    <br>
    <p>
      Passionate about video games and design for a long time, I have the chance today to get involved in personal and collective projects around my passions, either at the university or during my free time. I am interested in the UI/UX aspect of computer systems. The purely visual aspect of my projects is important to me. I just came back from two semesters in Germany where I studied computer science at the HTW Berlin.
    </p>
    <br>
    <p>
      Skills :
      Python,
      C,
      C#,
      HTML,
      CSS,
      Javascript,
      Photoshop,
      Premiere Pro,
      Unity,
      Java,
      SQL,
      Node.js,
      Vue.js,
      XML,
      Maven
    </p>
    <br>
    <p>
      <a target=”_blank” href="/src/other/CV_Mason_français.pdf">
        Click here to see my CV
      </a>
    </p>
    <br>
    <p>
      Contact :
      <br> mason.galilee@gmail.com
      <br> +33 6 84 81 14 42
    </p>
  </div>


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
    };
  },
  methods: {
    scroll: function () {
      document.getElementById('section1').scrollIntoView({
        behavior: "smooth"
      });
    },
  },
};
</script>

<style scoped>
  @import url('../assets/style1.css');
</style>