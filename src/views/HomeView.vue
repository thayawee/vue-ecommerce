<script setup>
import { RouterLink } from "vue-router";

import UserLayout from "@/layouts/UserLayout.vue";
</script>

<template>
  <UserLayout>
    <div
      class="hero h-96 mb-10"
      style="
        background-image: url(https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
      "
    >
      <div class="hero-overlay bg-opacity-60 rounded-box"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-4xl font-bold">HELLO TO CACTUS SHOP :)</h1>
          <RouterLink :to="{ name: 'product-list' }" class="btn btn-accent"
            >View Cactus</RouterLink
          >
        </div>
      </div>
    </div>

    <div
      class="carousel h-64 w-full mb-10 carousel-center p-4 space-x-4 bg-accent rounded-box"
    >
      <div class="carousel-item">
        <img
          src="https://images.pexels.com/photos/10109786/pexels-photo-10109786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="rounded-box"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://images.pexels.com/photos/4626404/pexels-photo-4626404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="rounded-box"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://images.pexels.com/photos/2998932/pexels-photo-2998932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="rounded-box"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://images.pexels.com/photos/1856430/pexels-photo-1856430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="rounded-box"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://images.pexels.com/photos/2742725/pexels-photo-2742725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="rounded-box"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://images.pexels.com/photos/912410/pexels-photo-912410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="rounded-box"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://images.pexels.com/photos/4825669/pexels-photo-4825669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="rounded-box"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://images.pexels.com/photos/4394243/pexels-photo-4394243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="rounded-box"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://images.pexels.com/photos/2880842/pexels-photo-2880842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="rounded-box"
        />
      </div>
    </div>
  </UserLayout>
</template>
