<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ProjectPreview from "@/components/ProjectPreview.vue";
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

</script>



<template>
  <header>
    <h1> Galilee Mason </h1>
    <p id="small_title"> UI, UX, Games, and Web Design </p>

    <img @click="scroll" id="down" src="./images/arrow-down.png">
  </header>

  <section id="section1">
    <project-preview/>
  </section>
  <project-preview/>
  <project-preview/>
  <project-preview/>


  <footer>
    <p><a href="https://www.freepik.com/free-photo/3d-abstract-wave-pattern-background_15611737.htm#query=black%20shape&position=24&from_view=keyword">Image by rawpixel.com</a> on Freepik</p>
  </footer>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
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
html {
  scroll-behavior: smooth;
}

@font-face {
  font-family: TitleFont;
  src: url(fonts/rogre.otf);
}

*
{
  font-family: Verdana, Arial, serif;
}

header
{
  height: 100vh;
  background-image: url("images/wave-bg.png");
  /* flex-box thing */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  margin-bottom: 30px;
  color: rgba(239,239,51,1);
}

h1{
  font-size: 380%;
  margin-bottom: 0;
  font-weight: normal;
  text-decoration: none;
}

#small_title{
  font-size: 150%;
}

#down
{
  position: absolute;
  top:85vh;
  padding: 20px;
  font-size: 2.5em;
  width: 7%;
  color: rgba(239,239,51,1);
}
#down:hover
{
  cursor: pointer;
  width: 10%;
}

footer{
  background-color: rgba(239,239,51,1);
  color: black;
  padding: 20px;
}



</style>