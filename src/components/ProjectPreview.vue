<template>
  <div>



    <div class="container">

      <div class="carousel">
        <img v-bind:id="currentIndex > 0 ? 'left' : 'left_deac'" src="/src/images/left-chevron.png" @click="prevSlide">

        <div class="slides">
          <div v-for="(slide, index) in project.slides" :key="index" v-show="currentIndex === index">
            <img class="img_to_display" :src="slide.image">
          </div>
        </div>

        <img v-bind:id="currentIndex < project.slides.length -1 ? 'right' : 'right_deac'" src="/src/images/right-chevron.png" @click="nextSlide">
      </div>

      <div class="title_and_subtitle">
        <p>
          <a class="title"> {{ project.title }} </a>
          <a class="subtitle"> {{ project.subtitle }}</a>
        </p>
      </div>
      <p class="description"> {{project.description}}</p>
    </div>

    <img v-if="!project.last" @click="scroll" id="down" ref="scrollBtn" src="/src/images/down-chevron.png">
    <div v-if="project.last" class="separator"></div>


  </div>
</template>

<script>

export default {
  name: "ProjectPreview",
  props: {
    project: {
      type: Object
    }
  },
  data() {
    return {
      slidePosition: 0,
      slideWidth: 0,
      currentIndex: 0,
    };
  },
  methods: {
    scroll: function () {
      console.log()
      const scrollOffset = this.$refs.scrollBtn.offsetTop; // Obtenir l'offset de la position actuelle du bouton
      window.scrollTo({
        top: 68 + scrollOffset,
        behavior: "smooth"
      });
    },
    nextSlide() {
      if (this.currentIndex < this.project.slides.length - 1) {
        this.currentIndex++;
        this.slidePosition = -this.currentIndex * this.slideWidth;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.slidePosition = -this.currentIndex * this.slideWidth;
      }
    },
  },
}
</script>

<style scoped>


*{
  color: rgb(10, 10, 10);
  text-align: center;
  background-color: #f1f1e8;
}

.title{
  font-weight: normal;
  text-decoration: none;
  font-size: 30px;
}

.subtitle{
  font-weight: normal;
  text-decoration: none;
  padding-left: 20px;
  font-style: italic;
}

.container{
  display: flex;
  flex-direction: column;
  height: 90vh;
}

.description{
  height: 22vh; /* set the height to your desired value */
  width: 50%;
  padding-left: 25%;
  text-align: justify;
  overflow: auto;
}

.img_to_display{
  max-height: 53vh;

}

.title_and_subtitle {
  display: flex;
  padding-left: 25%;
  width: 50%;
  padding-bottom: 5px;
}

#down, #left, #right
{
  z-index: 1000;
  transition: transform 0.2s ease;
  padding: 0;
  width: 3%;
  background-color: transparent;
}
#down:hover, #left:hover, #right:hover
{
  cursor: pointer;
  transform: scale(1.2); /* agrandit le bouton de 20% */
}

#left {
  margin-left: 50px;
}

#left_deac {
  padding: 0;
  width: 3%;
  margin-left: 50px;
  opacity: 0;
}

#right_deac {
  padding: 0;
  width: 3%;
  margin-right: 50px;
  opacity: 0;
}

#right {
  margin-right: 50px;
}

#down {
  padding-top: 12px;
}

.separator {
  height: 100px;
}







.carousel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 68vh;
  padding-top: 70px;
  padding-left: 20px;
  padding-right: 20px;
}

.slides {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
}

@media screen and (max-width: 900px) {
  .carousel {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .img_to_display{
  }
  .description, .title_and_subtitle {
    padding-left: 5%;
    width: 90%;
  }
  .description{
    height: 45vh;
  }
}


</style>