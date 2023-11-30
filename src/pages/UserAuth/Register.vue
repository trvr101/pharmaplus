<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent="register">
      <div v-if="message === 'error'">Invalid response</div>
      <div v-if="message === 'emailExists'">Email already exists</div>

      <v-text-field v-model="email" label="Username"></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        type="password"
      ></v-text-field>

      <v-text-field
        v-model="passwordConfirm"
        label="Password Confirm"
        type="password"
      ></v-text-field>

      <div v-if="message === 'passwordMismatch'">Passwords do not match</div>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>

      <router-link to="/login">Login</router-link>
    </v-form>
  </v-sheet>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      message: "",
    };
  },

  methods: {
    async register() {
      if (this.password === this.passwordConfirm) {
        try {
          const response = await axios.post("/api/register", {
            email: this.email,
            password: this.password,
          });

          this.message = response.data.msg;

          if (response.data.msg === "okay") {
            alert("Registered successfully");
            this.$router.push("/login");
          }
        } catch (error) {
          console.error("Error during registration:", error);
          // Handle other errors if needed
        }
      } else {
        this.message = "passwordMismatch";
      }
    },
  },
};
</script>
