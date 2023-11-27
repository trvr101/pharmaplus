<template>
  <q-form @submit.prevent="register">
    <q-input v-model="email" label="Email" />
    <q-input v-model="password" label="Password" type="password" />
    <q-input
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
      if (this.password === this.passwordConfirm) {
        try {
          const response = await api.post("/register", {
            email: this.email,
            password: this.password,
          });

          this.message = response.data.msg;

          if (response.data.msg === "okay") {
            sessionStorage.setItem("jwt", response.data.token);
            Notify.create("Registered successfully");
            this.$router.push("/login");
          }
        } catch (error) {
          console.error("Registration failed:", error);
          this.message = "failed";
        }
      } else {
        this.message = "passwordMismatch";
      }
    },
  },
};
</script>
