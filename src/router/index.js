import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    name: "pictures",
    path: "/pictures",
    component: () => import("../views/Pictures.vue"),
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
