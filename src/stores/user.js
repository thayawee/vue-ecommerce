import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    user: {},
  }),

  actions: {
    loadUser() {
      const userData = localStorage.getItem("user-data");
      if (userData) {
        this.user = JSON.parse(userData);
        this.isLogin = true;
      }
    },
    login(loginData) {
      const userData = {
        ...loginData,
      };
      this.isLogin = true;
      localStorage.setItem("user-data", JSON.stringify(userData));
    },
    updateProfile(profileData) {
      const userData = {
        ...profileData,
      };
      localStorage.setItem("user-data", JSON.stringify(userData));
    },
  },
});
