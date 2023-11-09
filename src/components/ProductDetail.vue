<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  products: Array,
  addToCart: Function,
});
</script>

<template>
  <div class="h-screen">
    <div
      v-for="product in products"
      class="card lg:card-side bg-base-100 shadow-xl mx-10 my-20"
    >
      <figure>
        <img class="w-96 h-96" :src="product.imageUrl" :alt="product.nameTh" />
      </figure>
      <div class="card-body">
        <h1 class="card-title text-2xl">
          {{ product.nameTh }} [ {{ product.nameEn }} ]
        </h1>
        <br /><br />
        <p>
          <span class="font-bold">รายละเอียด:</span> {{ product.description }}
        </p>
        <p><span class="font-bold">รหัสสินค้า:</span> {{ product.code }}</p>
        <p><span class="font-bold">ราคา:</span> {{ product.price }} บาท</p>
        <div class="card-actions justify-end">
          <RouterLink
            :to="{ name: 'cart' }"
            @click="addToCart(product)"
            class="btn btn-secondary"
            >Add To Cart</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
