<template>
  <q-card flat :bordered="!$q.dark.isActive" class="my-card q-pa-md">
    <div>
      <div
        id="donut-chart"
        class="fit row wrap justify-center items-center content-center"
      >
        <apexchart
          type="donut"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  name: "DonutChart",
  setup() {
    const series = ref([44, 55, 13, 43, 22]);
    const chartOptions = ref({
      labels: ["Branch A", "Branch B", "Branch C", "Branch D", "Branch E"],
      colors: ["rgba(2, 117, 133, 0.566)"],
      stroke: {
        curve: "smooth",
        width: 1,
        colors: ["teal"],
      },
      chart: {
        width: "100%", // Set the width to 100% for responsiveness
        height: "400px", // Set a specific height or adjust as needed
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "50%",
          },
        },
      },
    });

    return { series, chartOptions };
  },
};
</script>
