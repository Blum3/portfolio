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
      path: "/work",
      name: "Work",
      component: () => import("../components/WorkPage.vue"),
    },
    {
      path: "/inspirations",
      name: "Inspirations",
      component: () => import("../components/InspiPage.vue"),
    },
    {
      path: "/aboutme",
      name: "AboutMe",
      component: () => import("../components/AboutMePage.vue"),
    },
  ]
})

export default router
