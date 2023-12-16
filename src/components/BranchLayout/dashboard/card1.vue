<template>
  <q-card
    flat
    :bordered="!$q.dark.isActive"
    class="my-card text-primary"
    style="overflow: hidden"
    :class="{ 'text-grey-3 bg-primary ': $q.dark.isActive }"
  >
    <q-card-section>
      <div class="text-h6">Total Unique Items</div>
      <div class="q-display-2">{{ totalItems }}</div>
    </q-card-section>
    <q-linear-progress :value="1" color="teal-3" :max="100" />
  </q-card>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      totalItems: 0,
      pollingInterval: null,
    };
  },
  created() {
    this.fetchUserProfile();
  },
  computed: {
    getBranchId() {
      return this.userProfileFetched
        ? this.$store.state.userProfile?.branch_id
        : null;
    },
  },
  methods: {
    fetchUserProfile() {
      const token = sessionStorage.getItem("token");

      if (token) {
        this.$store
          .dispatch("fetchUserProfile", token)
          .then(() => {
            this.userProfileFetched = true;
            this.countUniqueItems();

            // Start polling every 60 seconds (adjust as needed)
            this.pollingInterval = setInterval(() => {
              this.countUniqueItems();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error fetching user profile:", error);
          });
      } else {
        console.error("Token not available. Unable to fetch user profile.");
      }
    },
    countUniqueItems() {
      const branchId = this.getBranchId;

      if (branchId) {
        api
          .get(`branch/count-unique-items/${branchId}`)
          .then((response) => {
            this.totalItems = response.data.count; // Assuming your API response has a 'count' property
          })
          .catch((error) => {
            console.error("Error fetching count:", error);
          });
      } else {
        console.error("Branch ID not available.");
      }
    },
  },
  beforeDestroy() {
    // Clear the polling interval when the component is destroyed
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
  },
};
</script>
