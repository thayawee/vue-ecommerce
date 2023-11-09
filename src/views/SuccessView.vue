<script setup>
import { ref, onMounted } from "vue";

import UserLayout from "@/layouts/UserLayout.vue";

import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const orderData = ref({});

onMounted(() => {
  cartStore.loadCheckout();
  if (cartStore.checkout) {
    orderData.value = cartStore.checkout;
  }
});
</script>

<template>
  <UserLayout>
    <div
      class="flex flex-col mb-10 mx-20 p-10 bg-base-200 shadow-lg rounded-2xl"
    >
      <div>
        <p class="text-xl font-bold">Your order is successful !</p>
        <p>Hi {{ orderData.name }}</p>
        <p>เตรียมรอรับสินค้าได้เลย</p>
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-4 gap-5 justify-items-center text-center">
        <div>
          <p class="font-bold">Order date</p>
          <p>{{ orderData.createdDate }}</p>
        </div>
        <div>
          <p class="font-bold">Order number</p>
          <p>{{ orderData.orderNumber }}</p>
        </div>
        <div>
          <p class="font-bold">Payment method</p>
          <p>{{ orderData.paymentMethod }}</p>
        </div>
        <div>
          <p class="font-bold">Address</p>
          <p>{{ orderData.address }}</p>
        </div>
      </div>
      <div class="divider"></div>
      <div
        v-for="product in orderData.products"
        class="grid grid-cols-6 gap-5 mb-5 items-center"
      >
        <div>
          <img
            class="w-full h-48 rounded-xl"
            :src="product.imageUrl"
            :alt="product.nameTh"
          />
        </div>
        <div class="col-span-3">
          <p class="font-bold">{{ product.nameTh }} [ {{ product.nameEn }} ]</p>
        </div>
        <div class="text-end">
          <p>จำนวน: {{ product.quantity }}</p>
        </div>
        <div class="text-end">
          <p>ราคา: {{ product.price * product.quantity }}</p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="flex justify-between">
        <p>ราคาสินค้าทั้งหมด</p>
        <p>{{ orderData.totalPrice }} บาท</p>
      </div>
      <div class="flex justify-between">
        <p>ค่าส่ง</p>
        <p>0 บาท</p>
      </div>
      <div class="divider"></div>
      <div class="flex justify-between">
        <p class="font-bold">ยอดชำระ</p>
        <p class="font-bold">{{ cartStore.summaryPrice }} บาท</p>
      </div>
      <div class="divider"></div>
      <p>ขอบคุณสำหรับการสั่งซื้อสินค้า</p>
    </div>
  </UserLayout>
</template>
