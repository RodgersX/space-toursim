import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dest",
    name: "Destination",
    component: () => import("../views/Destination.vue"),
  },
  {
    path: "/crew",
    name: "Crew",
    component: () => import("../views/Crew.vue"),
  },
  {
    path: "/tech",
    name: "Technology",
    component: () => import("../views/Technology.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
