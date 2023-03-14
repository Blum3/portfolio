<script setup>

</script>



<template>
  <header>

    <nav>
      <div class="logo">
        <router-link @click="scrollToTop" to="/">Sophie Bacquié</router-link>
      </div>
      <ul class="menu">
        <li><router-link  @click="scrollToTop"  to="/art">Art</router-link></li>
        <li><router-link  @click="scrollToTop"  to="/reportages">Dessins de reportage</router-link></li>
        <li><router-link  @click="scrollToTop"  to="/aboutme">À Propos de moi</router-link></li>
      </ul>
      <div class="contact-icons">
        <a href="https://www.instagram.com/sophiebacquie/"> <img class="header_icon"  v-bind:src="currentIcon1" @mouseover="currentIcon1 = artIcon" @mouseout="currentIcon1 = defaultIcon">  </a>
        <a href="https://www.instagram.com/atelierborderouge/"> <img class="header_icon"  v-bind:src="currentIcon2" @mouseover="currentIcon2 = ateIcon" @mouseout="currentIcon2 = defaultIcon">  </a>
        <a href="https://www.instagram.com/sophiebacquie_report/"> <img class="header_icon"  v-bind:src="currentIcon3" @mouseover="currentIcon3 = repIcon" @mouseout="currentIcon3 = defaultIcon">  </a>
        <a href="/src/other/book-sophie-bacquie.pdf" target="_blank"> <img class="header_icon"  v-bind:src="currentIcon4" @mouseover="currentIcon4 = porIcon" @mouseout="currentIcon4 = pdfIcon">  </a>
      </div>
    </nav>


    <img id="anim" src="/src/images/anim_home.gif">

  </header>

</template>


<script>

export default {
  name: "HomePage",
  data() {
    return {
      defaultIcon: '/src/images/logoinsta.png',
      pdfIcon: '/src/images/logopdf.png',
      artIcon: '/src/images/logoart.png',
      ateIcon: '/src/images/logoate.png',
      repIcon: '/src/images/logorep.png',
      porIcon: '/src/images/logopor.png',
      currentIcon1: '/src/images/logoinsta.png',
      currentIcon2: '/src/images/logoinsta.png',
      currentIcon3: '/src/images/logoinsta.png',
      currentIcon4: '/src/images/logopdf.png',
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