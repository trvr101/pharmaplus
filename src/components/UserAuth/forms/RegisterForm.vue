<template>
  <q-form @submit.prevent="register">
    <q-input required v-model="email" label="Email" />
    <q-input required v-model="password" label="Password" type="password" />
    <q-input
      required
      v-model="passwordConfirm"
      label="Confirm Password"
      type="password"
    />
    <q-btn
      unelevated
      rounded
      color="primary"
      label="Register"
      class="full-width q-ma-lg"
      outline
      type="submit"
    />

    <div v-if="message === 'passwordMismatch'">Passwords do not match</div>
    <div v-if="message === 'failed'">Registration failed</div>
  </q-form>
</template>

<script>
import { api } from "src/boot/axios";
import { Notify } from "quasar";

export default {
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      message: null,
    };
  },
  methods: {
    async register() {
      // ...
      try {
        const response = await api.post("/register", {
          email: this.email,
          password: this.password,
        });

        this.message = response.data.msg;

        if (response.data.msg === "okay") {
          const token = response.data.token;
          const user_role = response.data.user_role;

          // Store the token in session storage
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("user_role", user_role);

          // Redirect based on user role
          if (user_role === "admin") {
            this.$router.push("/dashboard");
          } else if (user_role === "cashier") {
            this.$router.push("/POS");
          } else {
            // Add a default redirection if needed
            this.$router.push("/default");
          }

          Notify.create("Registered successfully");
        }
      } catch (error) {
        console.error("Registration failed:", error);
        this.message = "failed";
      }
      // ...
    },
  },
};
</script>
