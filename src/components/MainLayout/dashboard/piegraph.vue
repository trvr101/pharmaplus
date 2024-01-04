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
import { ref, onMounted, onBeforeUnmount } from "vue";
import { api } from "src/boot/axios";

export default {
  name: "DonutChart",
  setup() {
    const series = ref([]);
    const chartOptions = ref({
      labels: [],
      colors: ["rgba(2, 117, 133, 0.566)"],
      stroke: {
        curve: "smooth",
        width: 1,
        colors: ["teal"],
      },
      chart: {
        width: "100%",
        height: "400px",
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

    const fetchData = async () => {
      try {
        const response = await api.get("/countStocksPerBranch");
        const data = response.data;

        chartOptions.value.labels = data.stocks_per_branch.map(
          (branch) => branch.branch_name
        );
        series.value = data.stocks_per_branch.map(
          (branch) => branch.total_stocks
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataInterval = setInterval(fetchData, 3000); // Poll every 20 seconds

    onMounted(() => {
      fetchData(); // Fetch data on component mount
    });

    onBeforeUnmount(() => {
      clearInterval(fetchDataInterval); // Clear the interval when the component is unmounted
    });

    return { series, chartOptions };
  },
};
</script>
