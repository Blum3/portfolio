<script setup>

</script>



<template>
  <div :class="{ active: isPanelActive }" class="side-panel">
    <div id="styles-list">
      <img class="style-icon active-style" id="classic-icon" src="/images/accessibility.png" alt="classic" @click="setStyle('classic')">
      <img class="style-icon" id="diablo-icon" src="/images/diablo.png" alt="diablo" @click="setStyle('diablo')">
      <img class="style-icon" id="overwatch-icon" src="/images/overwatch.png" alt="ow" @click="setStyle('overwatch')">
      <img class="style-icon" id="wow-icon" src="/images/wow.png" alt="wow" @click="setStyle('wow')">
    </div>
    <div id="styles-hover-area">
      <div id="brush-div">
        <img id="brush-icon" @click="togglePanel" src="/images/paintbrush.png" alt="styles">
      </div>
    </div>
  </div>
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
    <p>
      Some logos, trademarks, and images used on this website are the property of their respective owners. 
      The use of these elements is for illustrative purposes only and does not constitute affiliation or 
      endorsement of this site by the owners of the rights. If you are the rights owner and wish for content 
      to be removed, please contact me.
    </p>
    <p>
      Illustration realised by Cléo Binot.
    </p>
    <p>Icons created by Freepik, Riajulislam and Dave Gandy on <a href="https://www.flaticon.com/" > Flaticon</a> </p>
  </footer>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isPanelActive: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    setStyle(style) {
      this.$store.commit('updateChevrons', style)
      document.documentElement.style.setProperty('--text-color', `var(--text-color-${style})`);
      document.documentElement.style.setProperty('--background-color', `var(--background-color-${style})`);
      document.documentElement.style.setProperty('--link-hover-color', `var(--link-hover-color-${style})`);
      document.documentElement.style.setProperty('--menu-background-color', `var(--menu-background-color-${style})`);
      document.documentElement.style.setProperty('--menu-text-color', `var(--menu-text-color-${style})`);
      document.documentElement.style.setProperty('--font-family', `var(--font-family-${style})`);
      document.documentElement.style.setProperty('--title-font-family', `var(--title-font-family-${style})`);
      document.documentElement.style.setProperty('--separator-url', `var(--separator-url-${style})`);

      document.getElementById('classic-icon').classList.remove('active-style');
      document.getElementById('diablo-icon').classList.remove('active-style');
      document.getElementById('overwatch-icon').classList.remove('active-style');
      document.getElementById('wow-icon').classList.remove('active-style');

      document.getElementById(`${style}-icon`).classList.add('active-style');
    }
  }
};
</script>

<style>
@import url('assets/GlobalStyle.css');
</style>

<style scoped>
  @import url('assets/App.css');


  .side-panel {
  width: 250px; /* Set the initial width of the side panel */
  height: 580px;
  color: rgb(41, 41, 41);
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 12%;
  left: -180px;
}

.side-panel:hover,
.side-panel.active {
  left: -10px; /* Set the expanded width of the side panel on hover or click */
}

#styles-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 530px;
  background-color: lightgrey;
  /* box-shadow */
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.486);
  border-top-right-radius: 15px; /* Arrondi en haut à droite */
  border-bottom-right-radius: 15px; /* Arrondi en bas à droite */
  
}

#styles-hover-area{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#brush-div{
  width: 60px;
  height: 60px;
  border-top-right-radius: 15px; /* Arrondi en haut à droite */
  border-bottom-right-radius: 15px; /* Arrondi en bas à droite */
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* box-shadow */
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.486);
  padding-left: 20px;
}

#brush-icon{
  width: 40px;
  height: 40px;
}


.style-icon{
  margin: 10px;
  width: 80px;
  height: 80px;
  padding: 10px;
  cursor: pointer;
  /* radius */
  border-radius: 50%;
  /* border */
  border: 2px solid rgb(97, 97, 97);
  /* box-shadow */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  /* transition */
  transition: transform 0.2s;
  
}

.style-icon:hover{
  transform: scale(1.1);
}


.active-style{
  border: 2px solid rgb(3, 70, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 70, 0 , 0.75);
}

.active-style:hover{
  transform: scale(1);
}

</style>