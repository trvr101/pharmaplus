<template>
  <q-date
    v-model="days"
    minimal
    flat
    :bordered="!$q.dark.isActive"
    :events="events"
    today-btn
    class="q-pa-none"
    color="teal"
    :class="{ 'text-grey-3 bg-primary': $q.dark.isActive }"
  >
    <!-- timeline of the schedule -->
    <q-timeline
      color="cyan-9"
      :class="{ 'text-grey-3 bg-primary ': $q.dark.isActive }"
    >
      <q-timeline-entry
        v-for="(schedule, index) in schedules"
        :key="index"
        :icon="schedule.privacy === 'branch' ? 'store' : 'person'"
      >
        <template v-slot:title class="text-h6">
          {{ schedule.privacy === "branch" ? "Branch: " : "Private: " }}
          {{ schedule.event_name }}
        </template>
        <template v-slot:subtitle class="text-caption">
          {{ formatDate(schedule.start_date) }} -
          {{ formatDate(schedule.end_date) }}
        </template>

        <div class="text-body1">
          {{ schedule.additional_details || "No additional details" }}
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
        const response = await api.get("/ScheduleList");
        schedules.value = response.data;

        days.value = schedules.value.map((schedule) => ({
          from: schedule.start_date,
          to: schedule.end_date,
          style: {
            backgroundColor: schedule.privacy === "branch" ? "green" : "red",
            color: "white",
          },
        }));
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };

    onMounted(() => {
      fetchSchedules();
      const pollingInterval = setInterval(fetchSchedules, 1000);
      onBeforeUnmount(() => {
        clearInterval(pollingInterval);
      });
    });

    return {
      days,
      schedules,
      formatDate,
      date: ref("2023/12/11"),
      events: schedules.value.map((schedule) => ({
        start: schedule.start_date,
        end: schedule.end_date,
      })),
    };
  },
};
</script>
