import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/HomePage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/art",
      name: "Art",
      component: () => import("../components/ArtPage.vue"),
    },
    {
      path: "/reportages",
      name: "Reports",
      component: () => import("../components/ReportsPage.vue"),
    },
    {
      path: "/aboutme",
      name: "AboutMe",
      component: () => import("../components/AboutMePage.vue"),
    },
  ]
})

export default router
