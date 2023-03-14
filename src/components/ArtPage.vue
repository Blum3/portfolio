<script setup>
import ProjectPreview from "@/components/ProjectPreview.vue";

</script>



<template>
  <header>

    <nav>
      <div class="logo">
        <router-link @click="scrollToTop" to="/">Sophie Bacquié</router-link>
      </div>
      <ul class="menu">
        <li><router-link @click="scrollToTop"  to="/art" class="active">Art</router-link></li>
        <li><router-link @click="scrollToTop"  to="/reportages">Dessins de reportage</router-link></li>
        <li><router-link @click="scrollToTop"  to="/aboutme">À Propos de moi</router-link></li>
      </ul>
      <div class="contact-icons">
        <a href="https://www.instagram.com/sophiebacquie/"> <img class="header_icon"  v-bind:src="currentIcon1" @mouseover="currentIcon1 = artIcon" @mouseout="currentIcon1 = defaultIcon">  </a>
        <a href="https://www.instagram.com/atelierborderouge/"> <img class="header_icon"  v-bind:src="currentIcon2" @mouseover="currentIcon2 = ateIcon" @mouseout="currentIcon2 = defaultIcon">  </a>
        <a href="https://www.instagram.com/sophiebacquie_report/"> <img class="header_icon"  v-bind:src="currentIcon3" @mouseover="currentIcon3 = repIcon" @mouseout="currentIcon3 = defaultIcon">  </a>
        <a href="/src/other/book-sophie-bacquie.pdf" target="_blank"> <img class="header_icon"  v-bind:src="currentIcon4" @mouseover="currentIcon4 = porIcon" @mouseout="currentIcon4 = pdfIcon">  </a>
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
      defaultIcon: 'src/images/logoinsta.png',
      pdfIcon: 'src/images/logopdf.png',
      artIcon: 'src/images/logoart.png',
      ateIcon: 'src/images/logoate.png',
      repIcon: 'src/images/logorep.png',
      porIcon: 'src/images/logopor.png',
      currentIcon1: 'src/images/logoinsta.png',
      currentIcon2: 'src/images/logoinsta.png',
      currentIcon3: 'src/images/logoinsta.png',
      currentIcon4: 'src/images/logopdf.png',

      projects : [
        {
          id : 1,
          title : "Chemin Chateau Mendelssohn",
          subtitle : "acrylique et huile sur toile , série de 5 toiles, 120x50 cm, 2015",
          description : "Vue de l’exposition Déborderouge, Maison Salvan, Labège, 2017",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "src/data/mendelshon/fifi1.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/mendelshon/fifi2.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/mendelshon/fifi3.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/mendelshon/fifi4.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/mendelshon/ms-expo.jpg",
              title: null,
              description: null
            },
          ],
        },
        {
          id : 2,
          title : "Maison, Bosnie",
          subtitle : "huile et acrylique sur toile, 31x24cm, 24x19cm, 2016",
          description : "Vue de l’exposition Déborderouge, Maison Salvan, 2017",
          last : true,
          pics_only : true,
          slides: [
            {
              image: "src/data/maisons/1.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/maisons/2.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/maisons/3.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/maisons/4.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/maisons/5.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/maisons/6.JPG",
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