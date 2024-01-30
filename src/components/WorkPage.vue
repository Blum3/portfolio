<script setup>
import ProjectPreview from "@/components/ProjectPreview.vue";

</script>



<template>
  <div id="header">

    <nav>
      <div class="logo">
        <router-link @click="scrollToTop" to="/">Galilée Mason</router-link>
      </div>

      <div class="hamburger">
        <img id="burgericon" src='/images/burger-classic.png' alt="burgermenu" @click="openMenu" v-show="!isMenuOpen">
        <img id="crossicon" src='/images/cross-classic.png' alt="cross" @click="closeMenu" v-show="isMenuOpen">
      </div>

      <ul class="menu">
        <li><router-link @click="scrollToTop" class="active" to="/work">My Work</router-link></li>
        <li><router-link @click="scrollToTop" to="/games">Games</router-link></li>
        <li><router-link @click="scrollToTop" to="/morestuff">More stuff</router-link></li>
        <li><router-link @click="scrollToTop" to="/aboutme">About Me</router-link></li>
      </ul>
      <div class="contact-icons">
        <a href="https://www.linkedin.com/in/galil%C3%A9e-mason-9051861b8/"> <img class="header_icon"
            v-bind:src="currentIcon1" @mouseover="currentIcon1 = linkedinTxt" @mouseout="currentIcon1 = linkedinIcon">
        </a>
        <a href="https://github.com/Blum3"> <img class="header_icon" v-bind:src="currentIcon2"
            @mouseover="currentIcon2 = gitTxt" @mouseout="currentIcon2 = gitIcon"> </a>
      </div>
    </nav>

  </div>

  <div class="side-menu" :class="{ 'menu-open': isMenuOpen }">
    <ul>
      <li><router-link @click="scrollToTop" to="/work">My Work</router-link></li>
      <li><router-link @click="scrollToTop" to="/games">Games</router-link></li>
      <li><router-link @click="scrollToTop" to="/morestuff">More stuff</router-link></li>
      <li><router-link @click="scrollToTop" to="/aboutme">About Me</router-link></li>
      <li>
        <a href="https://www.linkedin.com/in/galil%C3%A9e-mason-9051861b8/"> <img class="side_icon"
            v-bind:src="currentIcon1" @mouseover="currentIcon1 = linkedinTxt" @mouseout="currentIcon1 = linkedinIcon">
        </a>
      </li>
      <li>
        <a href="https://github.com/Blum3"> <img class="side_icon" v-bind:src="currentIcon2"
            @mouseover="currentIcon2 = gitTxt" @mouseout="currentIcon2 = gitIcon"> </a>
      </li>
    </ul>
  </div>

  <section id="main_section">
    <project-preview :project="item" v-for="item in projects" :key="item.id" />
  </section>
</template>


<script>

export default {
  name: "WorkPage",
  data() {
    return {
      linkedinIcon: '/images/linkedinicon.png',
      gitIcon: '/images/githubicon.png',
      linkedinTxt: '/images/linkedintxt.png',
      gitTxt: '/images/githubtxt.png',
      currentIcon1: '/images/linkedinicon.png',
      currentIcon2: '/images/githubicon.png',
      isMenuOpen: false,

      projects: [
      {
          id: 4,
          title: "Odyssée Alpha",
          subtitle: "Unity, AR, Photoshop, Illustrator, User Centered Design, Research",
          description: "This is my master final project.",
          last: false,
          first: true,
          pics_only: true,
          slides: [
            {
              image: "/data/oa/oa1.png",
            },
            {
              image: "/data/oa/oa2.png",
            },
            {
              image: "/data/oa/oa3.png",
            },
            {
              image: "/data/oa/oa4.png",
            },
            {
              image: "/data/oa/oa5.png",
            },
          ],
        },
        {
          id: 3,
          title: "Concrete Kick-off",
          subtitle: "Figma, Photoshop, Illustrator",
          description: "Concrete Kick-off is a mobile app to find street football games. I imagined and designed it during a Graphic Design course in my Master. I got to use the Illustrator, Miro and Figma. It was very fun and satisfying to work around an idea brought by myself.",
          last: false,
          first: false,
          pics_only: true,
          slides: [
            {
              image: "/data/concrete/conc1.png",
            },
            {
              image: "/data/concrete/conc3.png",
            },
            {
              image: "/data/concrete/conc4.png",
            },
            {
              image: "/data/concrete/conc5.png",
            },
            {
              image: "/data/concrete/conc6.png",
            },
            {
              image: "/data/concrete/conc7.png",
            },
            {
              image: "/data/concrete/concvid.gif",
            },
            {
              image: "/data/concrete/concvid2.gif",
            },
          ],
        },
        {
          id: 2,
          title: "Interactive Critical System",
          subtitle: "Java Swing, Balsamiq, Research, User Centered Design",
          description: "I had the chance to do a 3 month internship in the ICS team at IRIT. My suject was : Interface design for patients and therapists in stroke rehabilitation. I've gained valuable insights into research, honing skills in design using Balsamiq and Figma, improving English through reading and writing research articles. Additionally, I strengthened programming skills with Java Swing and NetBeans, and acquired expertise in conducting HAZOP studies and PoC.",
          last: false,
          first: false,
          pics_only: true,
          slides: [
            {
              image: "/data/ics/ics1.png",
            },
            {
              image: "/data/ics/ics2.png",
            },
            {
              image: "/data/ics/ics3.png",
            },
            {
              image: "/data/ics/ics4.png",
            },
          ],
        },
        {
          id: 1,
          title: "SmartPhOx",
          subtitle: "Android Studio, Photoshop, Balsamiq, Research",
          description:
            "This product was being designed as part of a “Project” course during the second semester of my HCI Master.\n" +
            "\n" +
            "I was working with 3 others students. We were working with a client, we had to create a graphic chart and a mobile app and implement it.\n" +
            "\n" +
            "During this project, I did low fidelity prototypes, a state of the art, a poster and used Photoshop and Balsamiq.\n" +
            "\n",
          last: true,
          pics_only: true,
          slides: [
            {
              image: "/data/sp/sfff.png",
              title: null,
              description: null
            },
            {
              image: "/data/sp/smartphox1.png",
              title: null,
              description: null
            },
            {
              image: "/data/sp/smartphox2.png",
              title: null,
              description: null
            },
            {
              image: "/data/sp/smartphox3.png",
              title: null,
              description: null
            },
            {
              image: "/data/sp/smartphox4.png",
              title: null,
              description: null
            },
            {
              image: "/data/sp/sp99.png",
              title: null,
              description: null
            }
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
      })
    },
    closeMenu() {
      // Hide the side menu and cross icon, hide the burger icon
      this.isMenuOpen = false;
    },
    openMenu() {
      // Show the side menu and cross icon, show the burger icon
      this.isMenuOpen = true;
    },
  },
};
</script>

<style scoped>
@import url('../assets/App.css');

header {
  height: 0px;
}</style>