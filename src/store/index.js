import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import { api } from "src/boot/axios";

export default store(function () {
  const Store = createStore({
    state: {
      userProfile: null,
    },
    mutations: {
      setUserProfile(state, profile) {
        state.userProfile = profile;
      },
    },
    actions: {
      async fetchUserProfile({ commit }, token) {
        try {
          // Make your actual API request using Axios
          const response = await api.get(`/profile/${token}`);
          const profile = response.data.user; // Assuming the user profile is in the 'user' property of the response

          commit("setUserProfile", profile);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      },
    },
    modules: {
      // your other modules if any
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
