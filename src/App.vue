<script setup>

</script>



<template>
  <router-view></router-view>
  <footer>

    <br>
    <router-link @click="scrollToTop" to="/">Accueil</router-link>
    <br>
    <br>
    <router-link @click="scrollToTop" to="/aboutme">Contact</router-link>
    <br>
    <br>

    <a href="#" @click.prevent="scrollToTop">Haut de page</a>
    <br>
    <br>
    <p>Icons created by Freepik, Riajulislam and Dave Gandy on <a href="https://www.flaticon.com/" > Flaticon</a> </p>
  </footer>
</template>


<script>
export default {
  name: "App",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
  @import url('assets/style1.css');
</style>