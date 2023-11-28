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
    <!-- caurosel of the scedule  -->
    <q-carousel
      v-model="slide"
      swipeable
      animated
      :padding="padding"
      :vertical="vertical"
      :arrows="arrows"
      :navigation="navigation"
      :navigation-position="navPos"
      height="50px"
      class="bg-white text-teal rounded-borders"
    >
      <q-carousel-slide
        v-for="(schedule, index) in schedules"
        :key="index"
        name="style"
        class="column no-wrap flex-center"
      >
        <!-- description of schedule -->
        <div class="q-mt-md text-center">{{ schedule.description }}</div>
      </q-carousel-slide>
    </q-carousel>
  </q-date>
</template>

<script>
import { ref, onMounted } from "vue";
import { api } from "src/boot/axios";

export default {
  setup() {
    const days = ref([]);
    const slide = ref("style");
    const schedules = ref([]);

    const fetchSchedules = async () => {
      try {
        const response = await api.get("/SchedList");
        schedules.value = response.data.map((schedule) => ({
          from: format(new Date(schedule.start_time), "yyyy/MM/dd"),
          to: format(new Date(schedule.end_time), "yyyy/MM/dd"),
        }));
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };

    onMounted(() => {
      fetchSchedules();
    });

    return {
      days,
      slide,
      schedules,
    };
  },
};
</script>
