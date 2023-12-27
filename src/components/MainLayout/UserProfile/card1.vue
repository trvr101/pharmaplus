<template>
  <q-card flat :bordered="!$q.dark.isActive" class="my-card q-my-lg">
    <div class="fit column justify-center items-center content-center">
      <q-avatar size="170px" color="teal" text-color="white" class="q-ma-lg">
        {{ getInitials(userProfile.first_name, userProfile.last_name) }}
      </q-avatar>
      <div
        style="font-size: large; font-weight: 500"
        class="q-mt-md"
        :class="{
          'text-grey-3 q-pb-sm': $q.dark.isActive,
          'text-primary': !$q.dark.isActive,
        }"
      >
        {{ userProfile.first_name }} {{ userProfile.last_name }}
      </div>
      <div class="text-caption text-grey-6">name</div>
      <q-chip
        :outline="!$q.dark.isActive"
        class="q-ma-md"
        :class="{
          'bg-secondary text-grey-3': $q.dark.isActive,
          'text-teal': !$q.dark.isActive,
        }"
      >
        {{ getFormattedRole(userProfile.user_role) }}
      </q-chip>
      <div class="row q-ma-md">
        <q-card
          flat
          style="border-radius: 20px; width: 200px"
          class="q-pr-md"
          :class="{
            'bg-secondary text-grey-3': $q.dark.isActive,
            ' bg-teal-2': !$q.dark.isActive,
          }"
        >
          <div>
            <div class="decked-text">
              <q-icon
                name="done"
                class="bg-teal text-white"
                size="lg"
                style="border-radius: 20px; height: 50px; width: 50px"
              />
              <div class="text">
                <div
                  class="text-body1"
                  :class="{
                    'text-grey-3': $q.dark.isActive,
                    ' text-grey-9': !$q.dark.isActive,
                  }"
                >
                  300
                </div>
                <div
                  class="text-caption"
                  :class="{
                    'text-grey-5': $q.dark.isActive,
                    ' text-grey-9': !$q.dark.isActive,
                  }"
                >
                  Transaction Done:
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <q-separator inset class="q-my-md" />
    <div class="text-h6 q-ma-lg text-grey-8">Details</div>
    <div
      class="q-ma-lg text-body1"
      :class="{
        'text-grey-3 q-pb-sm': $q.dark.isActive,
        'text-grey-9 ': !$q.dark.isActive,
      }"
    >
      <div class="q-my-lg">Email: {{ userProfile.email }}</div>
      <div class="q-my-lg">Status: {{ userProfile.status }}</div>
      <div class="q-my-lg">Role: {{ userProfile.user_role }}</div>
      <div class="q-my-lg">Branch: {{ userProfile.branch_id }}</div>
      <div class="q-my-lg">Contact: {{ userProfile.phone }}</div>
      <div class="q-my-lg">Language: {{ userProfile.user_lang }}</div>
      <div class="q-my-lg">Country: {{ userProfile.user_country }}</div>
      <div class="text-center"></div>
    </div>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      userProfile: {},
    };
  },
  created() {
    this.fetchUserProfile(); // Initial fetch

    // Polling every 5 seconds (adjust as needed)
    this.pollingInterval = setInterval(() => {
      this.fetchUserProfile();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.pollingInterval); // Clear the interval to stop polling
  },
  methods: {
    async fetchUserProfile() {
      try {
        const token = this.$route.params.token; // Use this.$route here
        const response = await api.get(`/profile/${token}`);
        this.userProfile = response.data.user;
        // Set editedUserProfile to the fetched user profile initially
        this.editedUserProfile = { ...this.userProfile };
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // Handle error, e.g., show a message to the user
      }
    },
    getInitials(firstName, lastName) {
      const firstInitial = firstName ? firstName.charAt(0) : "";
      const lastInitial = lastName ? lastName.charAt(0) : "";
      return `${firstInitial}${lastInitial}`.toUpperCase();
    },
    getFormattedRole(userRole) {
      switch (userRole) {
        case "branch_admin":
          return "Branch Admin";
        case "cashier":
          return "Cashier";
        case "admin":
          return "Admin";
        default:
          return userRole; // Return the original value if it doesn't match any case
      }
    },
  },
};
</script>

<style>
.decked-text {
  display: flex;
  align-items: center;
}

.decked-text .text {
  margin-left: 10px;
}
</style>
