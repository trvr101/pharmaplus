<template>
  <q-date
    v-model="days"
    minimal
    flat
    bordered
    range
    multiple
    today-btn
    class="q-pa-none"
  >
    <!-- timeline of the schedule -->
    <q-timeline color="teal-9">
      <q-timeline-entry v-for="(schedule, index) in schedules" :key="index">
        <template v-slot:title class="text-h6">{{
          schedule.description
        }}</template>
        <template v-slot:subtitle class="text-caption">
          {{ formatDate(schedule.start_time) }} -
          {{ formatDate(schedule.end_time) }}
        </template>

        <div class="text-body1">
          {{ schedule.privacy === "branch" ? "Branch " : "Private " }}
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-date>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { api } from "src/boot/axios";

export default {
  setup() {
    const days = ref([]);
    const schedules = ref([]);

    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const fetchSchedules = async () => {
      try {
        const response = await api.get("/SchedList"); // Replace with your API endpoint
        schedules.value = response.data;
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };

    // Fetch schedule data when the component is mounted
    onMounted(() => {
      fetchSchedules();

      // Set up polling to fetch schedule data every 5 seconds (adjust as needed)
      const pollingInterval = setInterval(fetchSchedules, 1000);

      // Clean up the interval when the component is unmounted
      onBeforeUnmount(() => {
        clearInterval(pollingInterval);
      });
    });

    return {
      days,
      schedules,
      formatDate,
    };
  },
};
</script>
