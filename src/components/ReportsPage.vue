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
        <li><router-link @click="scrollToTop"  to="/art">Art</router-link></li>
        <li><router-link @click="scrollToTop"  to="/reportages" class="active">Dessins de reportage</router-link></li>
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
  name: "ReportsPage",
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
          title : "Bleu bleu",
          subtitle : "2021",
          description : "Bleu bleu est un reportage auto édité avec le soutient de Mixart Myrys, 7animé, Lieu Commun, Terra Nova.\n" +
              "Textes par Bérangère Cagnat",
          last : false,
          pics_only : true,
          slides: [
            {
              image: "src/data/bleu bleu/bleu 6r.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/bleu bleu/bleu 8r.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/bleu bleu/essais combo.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/bleu bleu/nouveaux dessins 3 r.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/bleu bleu/nouveaux dessins 4 r.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/bleu bleu/nouveaux dessins 11r.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/bleu bleu/nouveaux dessins 12 r.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/bleu bleu/objet bleu retouch.jpg",
              title: null,
              description: null
            },
            {
              image: "src/data/bleu bleu/texte_tarif_lieu-1.png",
              title: null,
              description: null
            },
          ],
        },
        {
          id: 2,
          title: "Flambère",
          subtitle: "2022",
          description: "Voici l’Abécédaire des Droits de l’Enfant de la Flambère. Avec comme point de départ les 26 lettres de l’alphabet, pour 26 mots, qui renvoient à 26 histoires et récits, pour mieux comprendre les réalités que vivent les enfants et les jeunes du terrain de la Flambère, bidonville proche du centre- ville de Toulouse. Cet Abécédaire des Droits de l’Enfant de la Flambère dépeint le quotidien de ces enfants et de ces jeunes, pour qui les droits, même les plus élémentaires, sont souvent bafoués. \n" +
              "L’association Rencont’roms nous intervient sur le terrain de la Flambère depuis 2013, et travaille plus particulièrement avec les enfants et les jeunes \n" +
              "+ d’infos : rencontromsnous.com. \n" +
              "Cet Abécédaire a reçu le soutien du Ministère de la Culture, DGLFLF, dans le cadre de l’appel à projet « Action culturelle et langue française 2021 ». Il bénéficie également du soutien de la Ville de Toulouse, du Conseil départemental de la Haute- Garonne, de la Région Occitanie / Pyrénées- Méditerranée, de la Préfecture Haute-Garonne / Occitanie, du FDVA Haute-Garonne & de la CAF Haute- Garonne. ",
          last: false,
          pics_only : true,
          slides: [
            {
              image: "src/data/flambere/_couv.jpg",
            },
            {
              image: "src/data/flambere/A.jpg",
            },
            {
              image: "src/data/flambere/B.jpg",
            },
            {
              image: "src/data/flambere/C.jpg",
            },
            {
              image: "src/data/flambere/D.jpg",
            },
            {
              image: "src/data/flambere/E.jpg",
            },
            {
              image: "src/data/flambere/F.jpg",
            },
            {
              image: "src/data/flambere/G.jpg",
            },
            {
              image: "src/data/flambere/H.jpg",
            },
            {
              image: "src/data/flambere/I.jpg",
            },
            {
              image: "src/data/flambere/J.jpg",
            },
            {
              image: "src/data/flambere/K2.jpg",
            },
            {
              image: "src/data/flambere/L.jpg",
            },
            {
              image: "src/data/flambere/M2.jpg",
            },
            {
              image: "src/data/flambere/N.jpg",
            },
            {
              image: "src/data/flambere/O.jpg",
            },
            {
              image: "src/data/flambere/P.jpg",
            },
            {
              image: "src/data/flambere/Q.jpg",
            },
            {
              image: "src/data/flambere/R2.jpg",
            },
            {
              image: "src/data/flambere/S.jpg",
            },
            {
              image: "src/data/flambere/T.jpg",
            },
            {
              image: "src/data/flambere/U.jpg",
            },
            {
              image: "src/data/flambere/V.jpg",
            },
            {
              image: "src/data/flambere/W.jpg",
            },
            {
              image: "src/data/flambere/X3.jpg",
            },
            {
              image: "src/data/flambere/Y.jpg",
            },
            {
              image: "src/data/flambere/Z.jpg",
            },
          ],
        },
        {
          id : 3,
          title : "Procès des \"Authentic Sisters\"",
          subtitle : "2018",
          description : "Le procès des \"Authentic Sisters\" s'est ouvert le 14 mai 2018 pour s'achever le 30 mai à la  16ème chambre correctionnelle du nouveau Tribunal de Grande Instance de Paris. Sur le banc des accusés, 16 personnes dont onze femmes. Ces Nigérianes font partie d'un réseau de prostitution. Elles aidaient des compatriotes à fuir le Nigeria pour venir en France, qui une fois arrivées devaient se prostituer pour payer les \"mamas maquerelles\".\n" +
              "Un processus bien rôdé entre illusions, rituels et menaces",
          last : true,
          pics_only : true,
          slides: [
            {
              image: "src/data/proces/1vue.jpeg",
            },
            {
              image: "src/data/proces/3arenne 1.jpeg",
            },
            {
              image: "src/data/proces/4proces clement seule contre tous couleur.jpeg",
            },
            {
              image: "src/data/proces/5proces clement 1.jpeg",
            },
            {
              image: "src/data/proces/6traduction.gif",
            },
            {
              image: "src/data/proces/7proces clement avocat.jpg",
            },
            {
              image: "src/data/proces/9proces clement hieratique.jpeg",
            },
            {
              image: "src/data/proces/10proces clement trio bad guy.jpeg",
            },
            {
              image: "src/data/proces/11proces clement salle.jpg",
            },
            {
              image: "src/data/proces/12proces clement juju.jpeg",
            },
            {
              image: "src/data/proces/13proces clement trio good guy.jpeg",
            },
            {
              image: "src/data/proces/13proces clement trio good guy.jpeg",
            },
            {
              image: "src/data/proces/15proces clement juge.jpeg",
            },
          ],
        }
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
</style>