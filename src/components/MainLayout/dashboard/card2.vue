<template>
  <q-card flat bordered class="my-card text-primary">
    <q-card-section>
      <div class="text-h6">Total Unique Items</div>
      <div class="q-display-2">{{ totalItems }}</div>
    </q-card-section>
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
      }, 5000); // Poll every 5 seconds (adjust as needed)
    },
    stopPolling() {
      clearInterval(this.pollingTimer);
    },
  },
  beforeDestroy() {
    this.stopPolling(); // Stop polling when the component is destroyed
  },
};
</script>
