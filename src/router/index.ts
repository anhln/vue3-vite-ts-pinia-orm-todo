import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/store/modules/user";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../modules/example/pages/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  const store = useUserStore();
  if (!store.users.length) {
    store.initilizeUsers();
  }
});

export default router;
