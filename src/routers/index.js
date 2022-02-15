import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@pages/notfound.vue")
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@pages/test.vue")
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@pages/home.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
