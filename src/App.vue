<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "./stores/user";
import { useEventStore } from "./stores/event";

const cartStore = useCartStore();
const userStore = useUserStore();
const eventStore = useEventStore();

onMounted(() => {
  cartStore.loadCart();
  userStore.loadUser();
});
</script>

<template>
  <div v-if="eventStore.alert" class="toast toast-top toast-center z-20">
    <div class="alert" :class="`alert-${eventStore.data.status}`">
      <span>{{ eventStore.data.message }}</span>
    </div>
  </div>
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
