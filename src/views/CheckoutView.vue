<script setup>
import { reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";

import UserLayout from "@/layouts/UserLayout.vue";
import Edit from "@/components/icons/Edit.vue";

import { useCartStore } from "@/stores/cart";

const router = useRouter();
const cartStore = useCartStore();

const formData = [
  { name: "Email", field: "email" },
  { name: "Name", field: "name" },
  { name: "Phone", field: "phone" },
  { name: "Address", field: "address" },
  { name: "Note", field: "note" },
];

const userFormData = reactive({
  email: "",
  name: "",
  phone: "",
  address: "",
  note: "",
});

const payment = () => {
  cartStore.placeorder(userFormData);
  router.push({ name: "success" });
  alert("Your order is successful!");
};
</script>

<template>
  <UserLayout>
    <div class="mx-10 text-2xl font-bold">Checkout</div>
    <div class="flex m-10">
      <div
        class="flex flex-col flex-auto w-32 bg-accent p-10 rounded-l-2xl shadow-lg"
      >
        <div
          v-for="item in cartStore.items"
          class="flex gap-10 border-b-2 rounded-sm border-gray-400"
        >
          <img
            class="w-24 h-32 my-5 rounded-xl"
            :src="item.imageUrl"
            :alt="item.nameTh"
          />
          <div class="flex flex-col justify-between items-start">
            <div>
              <p class="text-white pt-5 font-bold">
                {{ item.nameTh }} [ {{ item.nameEn }} ]
              </p>
              <p class="text-white">
                ราคา:
                {{ item.price }} บาท
              </p>
              <p class="text-white">
                จำนวน:
                {{ item.quantity }}
              </p>
            </div>
            <RouterLink :to="{ name: 'cart' }">
              <Edit class="mb-5"></Edit>
            </RouterLink>
          </div>
        </div>
        <div class="border-b-2 rounded-sm border-gray-400 pb-10">
          <div class="flex justify-between pt-10">
            <p class="text-white">ราคาสินค้าทั้งหมด</p>
            <p class="text-white">{{ cartStore.summaryPrice }} บาท</p>
          </div>
          <div class="flex justify-between">
            <p class="text-white">ค่าส่ง</p>
            <p class="text-white">0 บาท</p>
          </div>
        </div>
        <div class="flex justify-between pt-10">
          <p class="text-white text-xl font-bold">ยอดชำระ</p>
          <p class="text-white text-xl font-bold">
            {{ cartStore.summaryPrice }} บาท
          </p>
        </div>
      </div>
      <div
        class="flex flex-col flex-auto w-64 bg-base-200 py-10 items-end rounded-r-2xl shadow-lg"
      >
        <div v-for="form in formData" class="form-control w-full px-10 py-2">
          <label class="label">
            <span class="label-text">{{ form.name }}</span>
          </label>
          <textarea
            v-if="form.name === 'Address'"
            v-model="userFormData[form.field]"
            class="textarea textarea-bordered"
            placeholder="Type here"
          ></textarea>
          <input
            v-else
            v-model="userFormData[form.field]"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button @click="payment" class="btn btn-secondary mt-5 mr-10">
          Payment
        </button>
      </div>
    </div>
  </UserLayout>
</template>
