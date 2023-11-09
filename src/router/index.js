import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ProductListView from "@/views/ProductListView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import SearchView from "@/views/SearchView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import SuccessView from "@/views/SuccessView.vue";

import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/product",
      name: "product-list",
      component: ProductListView,
    },
    {
      path: "/product/:id",
      name: "product-detail",
      component: ProductDetailView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  userStore.loadUser();
  console.log("to", to.name);
  console.log("from", from.name);

  if (to.name === "product-list" && !userStore.isLogin) {
    next({ name: "login" });
  } else if (to.name === "search" && !userStore.isLogin) {
    next({ name: "login" });
  } else if (to.name === "product-detail" && !userStore.isLogin) {
    next({ name: "login" });
  } else if (to.name === "cart" && !userStore.isLogin) {
    next({ name: "login" });
  } else if (to.name === "checkout" && !userStore.isLogin) {
    next({ name: "login" });
  } else if (to.name === "success" && !userStore.isLogin) {
    next({ name: "login" });
  } else if (to.name === "profile" && !userStore.isLogin) {
    next({ name: "login" });
  } else if (to.name === "login" && userStore.isLogin) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
