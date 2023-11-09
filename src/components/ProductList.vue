<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  products: Array,
});
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 m-10"
  >
    <div
      v-for="product in products"
      class="card card-compact w-full bg-base-100 shadow-xl"
    >
      <RouterLink
        :to="{ name: 'product-detail', params: { id: product.code } }"
      >
        <figure>
          <img
            class="w-full h-64 rounded-t-box"
            :src="product.imageUrl"
            :alt="product.nameTh"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-lg">{{ product.nameTh }}</h2>
          <p>{{ product.nameEn }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
