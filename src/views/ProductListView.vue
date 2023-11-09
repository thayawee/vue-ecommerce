<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import ProductList from "@/components/ProductList.vue";

import { useProductStore } from "@/stores/product";

const productStore = useProductStore();
</script>

<template>
  <UserLayout>
    <div class="mx-10 text-2xl font-bold">Products</div>
    <ProductList :products="productStore.list"></ProductList>
  </UserLayout>
</template>
