<template>
  <q-form @submit.prevent="login">
    <q-input v-model="email" label="Email" :dense="dense" />
    <q-input
      v-model="password"
      label="Password"
      :dense="dense"
      type="password"
    />
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
  <q-btn
    unelevated
    rounded
    outline
    color="secondary"
    @click="$q.fullscreen.toggle()"
    :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
    class="float-right"
  />
</template>
<script>
import { api } from "src/boot/axios";
import { Notify } from "quasar"; // Import the Notify component

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
          // Assuming your token is available in response.data.token
          const token = response.data.token;
          const user_role = response.data.user_role;
          console.log(response.data);

          // Store the token in session storage
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("user_role", user_role);

          // Redirect to the dashboard
          if (user_role === "admin") {
            this.$router.push("/dashboard");
            Notify.create({
              message: "Login General Admin successfully!",
              color: "teal",
              position: "bottom",
              timeout: 3000, // Adjust timeout as needed
            });
          } else if (user_role === "cashier") {
            this.$router.push("/POS");
            Notify.create({
              message: "Login as Cashier successfully!",
              color: "teal",
              position: "bottom",
              timeout: 3000, // Adjust timeout as needed
            });
          } else if (user_role === "branch_admin") {
            this.$router.push("/Branch_dashboard");
            Notify.create({
              message: "Login as Branch Admin successfully!",
              color: "teal",
              position: "bottom",
              timeout: 3000, // Adjust timeout as needed
            });
          }

          // Display a success notification
        }
      } catch (error) {
        console.error("Error during login:", error);

        // Display an error notification
        Notify.create({
          message: "Error during login. Please try again.",
          color: "negative",
          position: "bottom",
          timeout: 3000, // Adjust timeout as needed
        });

        // Handle other errors if needed
      }
    },
  },
};
</script>
