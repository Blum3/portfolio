<script setup>

</script>

<template>
  <div>



    <div class="project_container">
      <div v-if="project.first">
        <br>
        <br>
        <br>
        
        <br>
      </div>


      <div class="carousel">
        <img v-bind:id="currentIndex > 0 ? 'left' : 'left_deac'" :src="chevrons.leftCurrent" @click="prevSlide">

        <div class="slides">
          <div v-for="(slide, index) in project.slides" :key="index" v-show="currentIndex === index">
            <img class="img_to_display" :src="slide.image">
          </div>
        </div>

        <img v-bind:id="currentIndex < project.slides.length -1 ? 'right' : 'right_deac'" :src="chevrons.rightCurrent" @click="nextSlide">
      </div>

      <div class="title_and_subtitle">
        <p>
          <a class="title classic-text"> {{ project.title }} </a>
          <a class="subtitle"> {{ project.subtitle }}</a>
        </p>
      </div>
      <p class="description"> {{project.description}}</p>

      <div v-if="!project.last" class="separator"></div>
      <div v-if="project.last">
        <br>
        <br>
        <br>
        <br>
      </div>

    </div>

    


  </div>
</template>

<script>

export default {
  name: "ProjectPreview",
  computed: {
    chevrons() {
      return this.$store.getters.getChevrons;
    }
  },
  props: {
    project: {
      type: Object
    },
  },
  data() {
    return {
      slidePosition: 0,
      slideWidth: 0,
      currentIndex: 0,
    };
  },
  methods: {
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
  @import url('../assets/ProjectPreview.css');
</style>