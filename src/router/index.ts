import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { createApp } from "vue";
import App from "../App.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/testpage",
    name: "TestPage",
    component: () => import("../views/TestPage.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
export default router;
