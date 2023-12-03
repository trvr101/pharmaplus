<template>
  <q-card flat bordered class="my-card">
    <!-- Carousel -->
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      control-color="white"
      prev-icon="arrow_left"
      next-icon="arrow_right"
      navigation-icon="radio_button_unchecked"
      padding
      infinite
      :autoplay="10000"
      class="bg-white text-dark shadow-1 rounded-borders q-pa-none"
      style="height: 100%"
    >
      <q-carousel-slide name="style">
        <div id="chart" style="width: 100%; height: 100%">
          <apexchart
            type="area"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MyChart",
  setup() {
    const slide = ref("style");

    const loading = ref(true);

    const series = ref([
      {
        name: "Transaction",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Restock",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ]);

    const chartOptions = ref({
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 1, // Adjust the width to make the line thinner
        colors: ["teal"], // Set the line color to teal
      },
      fill: {
        colors: ["rgba(134, 253, 197, 0.4)"], // Set the fill color to teal with 30% opacity
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: true, // Set to false to hide horizontal grid lines
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false, // Set to false to hide series labels at the bottom
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    });

    return { slide, loading, series, chartOptions };
  },
};
</script>
