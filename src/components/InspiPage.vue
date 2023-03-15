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
        <li><router-link  @click="scrollToTop"  to="/work">My Work</router-link></li>
        <li><router-link  @click="scrollToTop" class="active" to="/inspirations">Inspirations</router-link></li>
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
  name: "ReportsPage",
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
          title : "In the Gamer's Brain",
          subtitle : "Célia Hodent",
          description : "A book that I loved, telling how important interfaces and use experience is to video games.",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "src/data/inspi/itgb.jpg",
            },
          ],
        },
        {
          id: 2,
          title: "Information is beautiful",
          subtitle: "David McCandless",
          description: "A really beautiful book about data-visualisation",
          last: false,
          pics_only : true,
          slides: [
            {
              image: "src/data/inspi/iib.jpg",
            },
          ],
        },
        {
          id: 3,
          title: "Game Next Door",
          subtitle: "",
          description: "A Youtube channel talking about video games through game design, user experience and psychology.",
          last: true,
          pics_only : true,
          slides: [
            {
              image: "src/data/inspi/gnd.jpg",
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
</style>