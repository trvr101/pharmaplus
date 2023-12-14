<!-- <template>
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
    };
  },
  created() {
    this.startPolling();
  },
  methods: {
    fetchData() {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      api
        .get("/main/count-unique-items")
        .then((response) => {
          this.totalItems = response.data.count;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    startPolling() {
      this.fetchData(); // Initial fetch
      this.pollingTimer = setInterval(() => {
        this.fetchData(); // Fetch data at regular intervals
      }, 1000); // Poll every 5 seconds (adjust as needed)
    },
    stopPolling() {
      clearInterval(this.pollingTimer);
    },
  },
  beforeDestroy() {
    this.stopPolling(); // Stop polling when the component is destroyed
  },
};
</script> -->
<template>
  <div>
    <div v-if="profileData">
      <p>Branch ID: {{ branchId }}</p>
      <p>User ID: {{ userId }}</p>
    </div>
    <div v-else>
      <p>Loading profile data...</p>
    </div>
  </div>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      profileData: null,
      branchId: null,
      userId: null,
    };
  },
  async mounted() {
    await this.fetchProfile();
  },
  methods: {
    async fetchProfile() {
      try {
        const token = sessionStorage.getItem("token");

        // Assuming `api` is your Axios instance or API module
        const response = await api.get(`/profile/${token}`);
        this.profileData = response.data;

        // Extract branch_id and user_id
        this.branchId = this.profileData.user.branch_id;
        this.userId = this.profileData.user.user_id;
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },
  },
};
</script>

<style>
/* Your component styles */
</style>
