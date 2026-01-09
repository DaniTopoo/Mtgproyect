import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardListView from "../views/CardListView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/cardlist", name: "cardlist", component: CardListView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
