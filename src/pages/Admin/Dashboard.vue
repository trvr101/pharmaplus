<template>
  <div class="container">
    <div class="row">
      <div :class="{ 'col-9': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
        <div class="row justify-center">
          <div :class="{ 'col-4': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Card</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
            </q-card>
          </div>
          <div :class="{ 'col-4': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Card 2</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
            </q-card>
          </div>
          <div :class="{ 'col-4': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Card 3</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row justify-center">
          <div :class="{ 'col-8': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
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
                class="bg-white text-dark shadow-1 rounded-borders"
                style="height: 100%"
              >
                <q-carousel-slide
                  name="style"
                  class="column no-wrap flex-center"
                >
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

            <!-- Table -->
            <q-card v-if="loading" flat bordered class="my-card"
              ><q-markup-table>
                <thead>
                  <tr>
                    <th class="text-left" style="width: 150px">
                      <q-skeleton animation="blink" type="text" />
                    </th>
                    <th class="text-right">
                      <q-skeleton animation="blink" type="text" />
                    </th>
                    <th class="text-right">
                      <q-skeleton animation="blink" type="text" />
                    </th>
                    <th class="text-right">
                      <q-skeleton animation="blink" type="text" />
                    </th>
                    <th class="text-right">
                      <q-skeleton animation="blink" type="text" />
                    </th>
                    <th class="text-right">
                      <q-skeleton animation="blink" type="text" />
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="n in 5" :key="n">
                    <td class="text-left">
                      <q-skeleton animation="blink" type="text" width="85px" />
                    </td>
                    <td class="text-right">
                      <q-skeleton animation="blink" type="text" width="50px" />
                    </td>
                    <td class="text-right">
                      <q-skeleton animation="blink" type="text" width="35px" />
                    </td>
                    <td class="text-right">
                      <q-skeleton animation="blink" type="text" width="65px" />
                    </td>
                    <td class="text-right">
                      <q-skeleton animation="blink" type="text" width="25px" />
                    </td>
                    <td class="text-right">
                      <q-skeleton animation="blink" type="text" width="85px" />
                    </td>
                  </tr>
                </tbody>
              </q-markup-table>
            </q-card>

            <q-card v-else flat bordered class="my-card">
              <q-table
                flat
                bordered
                title="Treats"
                :rows="rows"
                :columns="columns"
                row-key="name"
                :visible-columns="visibleColumns"
              >
                <template v-slot:top> </template>
              </q-table>
            </q-card>
          </div>
          <div :class="{ 'col-4': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Card 7</div>
              </q-card-section>

              <q-card-section class="q-pt-none" v-for="n in 8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div :class="{ 'col-3': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
        <!-- TODO event -->
        <q-date v-model="days" minimal flat bordered range multiple />
        <!-- Notes -->
        <q-card flat bordered class="my-card">
          <q-card-section>
            <q-btn flat rounded class="absolute-top-right"
              ><q-icon name="add"
            /></q-btn>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-expansion-item
              group="somegroup"
              icon="notes"
              label="First"
              default-opened
              header-class="text-primary"
              v-for="n in 10"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, eius reprehenderit eos corrupti commodi magni quaerat
                  ex numquam, dolorum officiis modi facere maiores architecto
                  suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-card-section>
        </q-card>
        <!-- End Notes -->
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "mychart",
  setup() {
    return {
      days: ref([
        { from: "2023/08/01", to: "2023/08/10" },
        { from: "2023/07/21", to: "2023/07/25" },
      ]),
      slide: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
  data() {
    return {
      apiEndpoint: "http://localhost:8080/ItemList",
      rows: [], // Initialize an empty array to store the fetched data
      // ... other data properties
      loading: true,
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
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
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  },
  mounted() {
    setTimeout(() => {
      // After data is fetched, update the rows array
      //CHANGE THIS /* your fetched data */;
      this.loading = false;
    }, 2000); // Simulating a 2-second delay (adjust as needed)
  },
  created() {
    axios
      .get(this.apiEndpoint)
      .then((response) => {
        this.rows = response.data; // Assuming the API returns an array of data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>
<style lang="css" scoped>
.my-card,
.q-date {
  border-radius: 20px;
  width: auto;
  margin: 10px;
}
/* .row > * {
    border: black solid 1px;
  } */
.container {
  height: 100%;
}
.q-card-section {
  padding: 0;
}
</style>
