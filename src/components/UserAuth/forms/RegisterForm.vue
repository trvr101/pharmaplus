<template>
  <q-form @submit.prevent="register">
    <q-input required v-model="invitationCode" label="Invitation Code" />
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
      invitationCode: "",
      email: "",
      password: "",
      passwordConfirm: "",
      message: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await api.post("/register", {
          invitationCode: this.invitationCode,
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

          console.log("User Role:", user_role);

          // Redirect based on the first two letters of the invitationCode
          this.redirectBasedOnInvitationCode(this.invitationCode);

          Notify.create({
            message: "Registered successfully!",
            color: "teal",
            position: "bottom",
            timeout: 3000, // Adjust timeout as needed
          });
        }
      } catch (error) {
        console.error("Registration failed:", error);
        this.message = "failed";
      }
    },

    redirectBasedOnInvitationCode(invitationCode) {
      const firstTwoLetters = invitationCode.substring(0, 2).toUpperCase();

      switch (firstTwoLetters) {
        case "CS":
          this.$router.push("/POS");
          break;
        case "BA":
          this.$router.push("/Branch_dashboard");
          break;
        default:
          // Add a default redirection if needed
          this.$router.push("/");
          break;
      }
    },
  },
};
</script>
