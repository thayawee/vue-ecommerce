<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "./stores/user";

const cartStore = useCartStore();
const userStore = useUserStore();

onMounted(() => {
  cartStore.loadCart();
  userStore.loadUser();
});
</script>

<template>
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@200;400;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Prompt", sans-serif;
}
</style>
