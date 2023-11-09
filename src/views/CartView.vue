<script setup>
import { RouterLink } from "vue-router";

import UserLayout from "@/layouts/UserLayout.vue";
import Trash from "@/components/icons/Trash.vue";
import Minus from "@/components/icons/Minus.vue";
import Plus from "@/components/icons/Plus.vue";

import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <UserLayout>
    <div class="h-screen">
      <div class="mx-10 text-2xl font-bold">Shopping cart</div>
      <p
        v-if="cartStore.items.length === 0"
        class="mx-10 my-20 text-xl text-center"
      >
        Your shopping cart is empty!
      </p>
      <div v-else>
        <div
          v-for="(item, index) in cartStore.items"
          class="flex flex-col items-center m-10"
        >
          <div
            class="flex gap-10 border-b-2 rounded-sm border-gray-300 pb-5 w-4/5 h-48"
          >
            <img
              class="w-40 rounded-xl"
              :src="item.imageUrl"
              :alt="item.nameTh"
            />
            <div class="flex flex-col justify-between w-full">
              <div class="flex justify-between w-full">
                <p class="text-lg font-bold">
                  {{ item.nameTh }} [ {{ item.nameEn }} ]
                </p>
                <Trash @click="cartStore.removeItemInCart(index)"></Trash>
              </div>
              <div class="flex justify-between w-full">
                <p>
                  ราคา
                  <span class="text-2xl text-green-700">
                    {{ item.price }}
                  </span>
                  บาท
                </p>
                <div class="flex items-center gap-10">
                  <Minus
                    @click="
                      if (item.quantity > 1) {
                        item.quantity--;
                      }
                    "
                  ></Minus>
                  <p class="text-2xl">{{ item.quantity }}</p>
                  <Plus @click="item.quantity++"></Plus>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center w-1/3 m-auto">
          <div class="flex flex-col w-full">
            <div
              class="flex justify-between border-b-2 rounded-sm border-gray-300 pb-5 w-full mb-10"
            >
              <p class="text-2xl">ราคาสินค้าทั้งหมด</p>
              <p class="text-2xl">{{ cartStore.summaryPrice }} บาท</p>
            </div>
            <div class="flex justify-between mb-10">
              <div class="card-actions justify-end">
                <RouterLink
                  :to="{ name: 'product-list' }"
                  class="btn btn-neutral"
                  >Continue Shopping</RouterLink
                >
              </div>
              <div class="card-actions justify-end">
                <RouterLink :to="{ name: 'checkout' }" class="btn btn-secondary"
                  >Checkout</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>
