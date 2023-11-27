<template>
  <q-btn
    to="/dashboard"
    label="dashboard
    "
  />
  <q-form @submit.prevent="login">
    <q-input v-model="email" label="Email" :dense="dense" />
    <q-input v-model="password" label="Password" :dense="dense" />
    <q-btn
      unelevated
      rounded
      color="primary"
      label="login"
      class="full-width q-ma-lg"
      outline
      type="submit"
  /></q-form>
</template>
<script>
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMsg: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await api.post("/login", {
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  },
};
</script>
