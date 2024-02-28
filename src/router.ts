import { Home, NotFound, RestaurantPage, SelectedDish } from "@pages/index";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home, name: "home" },
  {
    path: "/restaurant/:restaurantId",
    name: "restaurant",
    component: RestaurantPage,
  },
  {
    path: "/restaurant/:restaurantId/:selectedDish",
    name: "selectedDish",
    component: SelectedDish,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
