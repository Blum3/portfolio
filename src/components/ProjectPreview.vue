<template>
  <div>
    <div class="separator"></div>
    <div class="container">
      <h2> {{ project.title }} </h2>

        <carousel :items-to-show="1">
          <slide v-for="i in project.images" v-bind:key="i">
            <div class="carousel_item">
              <img :src=i.url />
            </div>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>


      
      <p class="description"> {{project.description}}</p>

    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: "ProjectPreview",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    project: {
      type: Object
    }
  },
  data() {
  },
}
</script>

<style scoped>



*{
  color: rgba(239,239,51,1);
  text-align: center;
}

h2{
  padding: 20px;
  font-weight: normal;
  text-decoration: none;
}


.container{
  background-color: black;
  padding-bottom: 40px;
  padding-top: 30px;
}

.separator{
  background-color: rgba(239,239,51,1);
  width: 100%;
  height: 20px;
}

.description{
  padding-left: 25%;
  padding-right: 25%;
}

img{
  width: 60%;
  height: 60%;
  padding : 30px;
}

.carousel_item {
  min-height: 200px;
  width: 100%;
  background-color: rgba(239,239,51,1);;
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>