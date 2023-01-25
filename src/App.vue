<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ProjectPreview from "@/components/ProjectPreview.vue";

</script>

<template>
  <header>
    <h1> Galilée Mason </h1>
    <p id="small_title"> UI, UX, Games, and Web Design </p>
  </header>


  <project-preview/>
  <project-preview/>
  <project-preview/>


  <footer>
    <p><a href="https://www.freepik.com/free-photo/3d-abstract-wave-pattern-background_15611737.htm#query=black%20shape&position=24&from_view=keyword">Image by rawpixel.com</a> on Freepik</p>
  </footer>
</template>


<style scoped>

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
  font-size: 300%;
  margin-bottom: 0;
  font-weight: normal;
}

#small_title{
  font-size: 125%;
}

footer{
  background-color: rgba(239,239,51,1);
  color: black;
  padding: 20px;
}



</style>