<script setup>
import { ref, onMounted } from "vue";

import UserLayout from "@/layouts/UserLayout.vue";

import { useUserStore } from "@/stores/user";
import { useEventStore } from "../stores/event";

const userStore = useUserStore();
const eventStore = useEventStore();

const name = ref("");
const email = ref("");

const updateProfile = () => {
  const profileData = {
    name: name.value,
    email: email.value,
  };
  userStore.updateProfile(profileData);
  eventStore.popupMessage("success", "😊 Update profile successful !");
};

onMounted(() => {
  userStore.loadUser();
});
</script>

<template>
  <UserLayout>
    <div class="h-screen">
      <div class="flex flex-col items-center justify-center pb-10">
        <div
          class="card flex flex-col justify-center items-center w-1/2 card-side bg-base-100 shadow-xl"
        >
          <p class="pt-10 px-10 text-2xl font-bold">Your profile</p>
          <div
            class="avatar pt-10 px-10 flex flex-col items-center gap-5 w-full"
          >
            <div class="w-24 rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/134253693?s=400&u=e958d85f0edc2d2feac20718f353a2d8567eedbd&v=4"
                alt="profile-image"
              />
            </div>
          </div>
          <div class="card-body w-full p-10">
            <div class="form-control w-full py-2">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                v-model="name"
                type="text"
                :placeholder="userStore.user.name"
                class="input input-bordered w-full"
              />
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                v-model="email"
                type="text"
                :placeholder="userStore.user.email"
                class="input input-bordered w-full"
              />
            </div>
            <div class="card-actions justify-end">
              <button @click="updateProfile" class="btn btn-secondary mt-5">
                Update profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>
