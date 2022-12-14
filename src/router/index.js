import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pictures from "../views/Pictures.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "pictures",
    path: "/pictures",
    component: Pictures,
  },
  {
    name: "contact",
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
