<template>
  <q-card flat :bordered="!$q.dark.isActive" class="my-card">
    <div id="donut-chart" style="width: 100%; height: 100%">
      <apexchart
        type="donut"
        :options="chartOptions"
        :series="series"
      ></apexchart>
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
        width: 1, // Adjust the width to make the line thinner
        colors: ["teal"], // Set the line color to teal
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      plotOptions: {
        pie: {
          donut: {
            size: "50%", // Adjust the size of the donut hole
          },
        },
      },
    });

    return { series, chartOptions };
  },
};
</script>
