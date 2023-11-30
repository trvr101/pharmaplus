<template>
  <q-form @submit.prevent="login">
    <q-input v-model="email" label="Email" :dense="dense" />
    <q-input v-model="password" label="Password" :dense="dense" />
    <q-btn
      unelevated
      rounded
      color="primary"
      label="Login"
      class="full-width q-ma-lg"
      outline
      type="submit"
    />
  </q-form>
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
      // Client-side check for empty password
      if (this.password.trim() === "") {
        this.errorMsg = "Password cannot be empty";
        return;
      }

      try {
        const response = await api.post("/login", {
          email: this.email,
          password: this.password,
        });

        console.log(response.data);

        if (response.data.msg === "error") {
          this.errorMsg = "Invalid email or password";
        } else {
          // Login was successful, you may redirect or perform other actions
        }
      } catch (error) {
        console.error("Error during login:", error);
        // Handle other errors if needed
      }
    },
  },
};
</script>
