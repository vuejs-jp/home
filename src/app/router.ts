import type { RouteRecordRaw } from "vue-router";
import HomePage from "@/features/home/HomePage.vue";
import StackPage from "@/features/stack/StackPage.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/stack",
    name: "stack",
    component: StackPage,
  },
];
