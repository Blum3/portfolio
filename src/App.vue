<script setup>
import ProjectPreview from "@/components/ProjectPreview.vue";

</script>



<template>
  <header>

    <div id="nav">
      <ul>
        <li><a class="active" href="#">Home</a>
        </li>
        <li><a href="#">About Us</a>
        </li>
        <li><a href="#">Blah</a>
        </li>
        <li><a href="#">exampl</a>
        </li>
      </ul>
    </div>


    <h1> Galilee Mason </h1>
    <p id="small_title"> UI, UX, Games, and Web Design </p>

    <img @click="scroll" id="down" src="./images/arrow-down.png">
  </header>

  <section id="section1">
    <project-preview :project="item" v-for="item in projects" :key="item.id" />
  </section>


  <footer>
    <p><a href="https://www.freepik.com/free-photo/3d-abstract-wave-pattern-background_15611737.htm#query=black%20shape&position=24&from_view=keyword">Image by rawpixel.com</a> on Freepik</p>
  </footer>
</template>


<script>

export default {
  name: "App",
  data() {
    return {
      projects : [
        {
          id : 1,
          title : "EKO : a pixel art 2D platformer",
          images: [{id: 1, url: '../src/images/eko1.jpg'}, {id: 2, url: '../src/images/eko2.jpg'}, {id: 3, url: '../src/images/eko3.jpg'}],
          description : "Work In Progress : This project is still under development. I wanted to create a 2D platformer with a fun and musical gameplay. This project was very interesting because I had to do everything, programming, level design, art, animations, etc… During this project, I used Unity, and Photoshop, programming was done in C#. 2023"
        },
        {
          id : 2,
          title : "Projet 2",
          images: [{id: 1, url: '../src/images/eko1.jpg'}, {id: 2, url: '../src/images/eko2.jpg'}, {id: 3, url: '../src/images/eko3.jpg'}],
          description : "bllllllllllllllllllllllllbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbllllllllllllllllllllllllllllllaaaaaaaaaaaaa"
        }
      ]
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




#nav {
  left: 0px;
  height: 40px;
  background-color: rgba(239,239,51,1);
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0px;
  z-index: 30000;
}
#nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
}
#nav ul li {
  margin: 0;
  padding: 0;
  display: inline-block;
}
#nav ul li a {
  text-decoration: none;
  padding: 10px 20px;
  display: block;
  color: black;
  text-align: center;
}

#nav ul li:hover {
  background-color: grey;
}

/* Add a color to the active/current link */
#nav a.active {
  background-color: black;
  color: white;
}





footer{
  background-color: rgba(239,239,51,1);
  color: black;
  padding: 20px;
}



</style>