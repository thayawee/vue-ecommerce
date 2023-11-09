<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

import UserLayout from "@/layouts/UserLayout.vue";
import ProductDetail from "@/components/ProductDetail.vue";

import { useProductStore } from "@/stores/product";
import { useCartStore } from "@/stores/cart";

const route = useRoute();
const productId = ref("");

const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(() => {
  if (route.params.id) {
    productId.value = route.params.id;
  }
});

const selectProductById = computed(() => {
  return productStore.selectProductById(productId.value);
});

const addToCart = (product) => {
  cartStore.addToCart(product);
};
</script>

<template>
  <UserLayout>
    <ProductDetail
      :products="selectProductById"
      :addToCart="addToCart"
    ></ProductDetail>
  </UserLayout>
</template>
