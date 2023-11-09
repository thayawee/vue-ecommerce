<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";

import { useCartStore } from "@/stores/cart";
import { useUserStore } from "@/stores/user";

const router = useRouter();

const searchText = ref("");

const userStore = useUserStore();
const cartStore = useCartStore();

const logout = () => {
  userStore.isLogin = false;
  localStorage.removeItem("user-data");
  localStorage.removeItem("cart-data");
  localStorage.removeItem("order-data");
  window.location = "/";
};

const handleSearch = (event) => {
  if (event.key === "Enter") {
    router.push({ name: "search", query: { q: searchText.value } });
  }
};
</script>

<template>
  <div class="container mx-auto">
    <div class="navbar bg-base-100 py-10 sticky top-0 z-10">
      <div class="flex-1">
        <RouterLink
          :to="{ name: 'home' }"
          class="btn btn-ghost normal-case text-xl"
          >CACTUS SHOP</RouterLink
        >
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
            v-model="searchText"
            @keyup="handleSearch"
          />
        </div>

        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span
                class="badge badge-sm indicator-item bg-accent text-white"
                >{{ cartStore.summaryQuantity }}</span
              >
            </div>
          </label>
          <div
            tabindex="0"
            class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg"
                >{{ cartStore.summaryQuantity }} Items</span
              >
              <span class="text-info-content"
                >Subtotal: ฿{{ cartStore.summaryPrice }}</span
              >
              <div class="card-actions">
                <RouterLink
                  :to="{ name: 'cart' }"
                  class="btn btn-secondary btn-block"
                  >View cart</RouterLink
                >
              </div>
            </div>
          </div>
        </div>

        <RouterLink
          :to="{ name: 'login' }"
          v-if="!userStore.isLogin"
          class="btn"
        >
          Login
        </RouterLink>
        <div v-else class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/134253693?s=400&u=e958d85f0edc2d2feac20718f353a2d8567eedbd&v=4"
              />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <RouterLink :to="{ name: 'profile' }"> Profile </RouterLink>
            </li>
            <li>
              <a @click="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- main content -->
    <slot></slot>

    <footer
      class="footer footer-center p-10 bg-base-200 text-base-content rounded"
    >
      <aside>
        <p>Copyright © 2023 - CACTUS SHOP</p>
      </aside>
    </footer>
  </div>
</template>
