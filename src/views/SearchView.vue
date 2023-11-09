<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

import UserLayout from "@/layouts/UserLayout.vue";
import ProductList from "@/components/ProductList.vue";

import { useProductStore } from "@/stores/product";

const route = useRoute();
const searchText = ref("");

const productStore = useProductStore();

watch(
  () => route.query.q,
  (newSearchText) => {
    searchText.value = newSearchText;
  },
  { immediate: true }
);

const filterProducts = computed(() => {
  return productStore.filterProducts(searchText.value);
});
</script>

<template>
  <UserLayout>
    <div class="h-screen">
      <div class="mx-10 text-2xl">
        Search:
        <b
          ><i>" {{ searchText }} "</i></b
        >
      </div>
      <p
        v-if="filterProducts.length === 0"
        class="mx-10 my-20 text-xl text-center"
      >
        We couldn't find that product. <br />Please search again.
      </p>
      <ProductList v-else :products="filterProducts"></ProductList>
    </div>
  </UserLayout>
</template>
