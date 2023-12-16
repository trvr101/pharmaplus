<template>
  <div class="container">
    <div class="row">
      <div
        :class="{
          'col-9': $q.screen.gt.sm,
          'col-12 no-margin no-padding': $q.screen.lt.sm,
        }"
      >
        <div class="row justify-center">
          <div
            :class="{
              'col-4': $q.screen.gt.sm,
              'col-12  no-margin no-padding ': $q.screen.lt.sm,
            }"
          >
            <card1 />
          </div>
          <div
            :class="{
              'col-4': $q.screen.gt.sm,
              'col-12  no-margin no-padding': $q.screen.lt.sm,
            }"
          >
            <card2 />
          </div>
          <div
            :class="{
              'col-4': $q.screen.gt.sm,
              'col-12  no-margin no-padding': $q.screen.lt.sm,
            }"
          >
            <card3 />
          </div>
        </div>
        <div class="row justify-center">
          <div
            :class="{
              'col-8': $q.screen.gt.sm,
              'col-12 no-margin no-padding': $q.screen.lt.sm,
            }"
          >
            <mainchart />

            <!-- Table -->
            <table1 />
          </div>
          <div
            :class="{
              'col-4': $q.screen.gt.sm,
              'col-12 no-margin no-padding': $q.screen.lt.sm,
            }"
          >
            <notes />
          </div>
        </div>
      </div>
      <div
        :class="{
          'col-3': $q.screen.gt.sm,
          'col-12 no-margin no-padding': $q.screen.lt.sm,
        }"
      >
        <!-- TODO evemt -->
        <calendar />
        <!-- Notes -->

        <!-- End Notes -->
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import card1 from "components/BranchLayout/dashboard/card1";
import card2 from "components/BranchLayout/dashboard/card2";
import card3 from "components/BranchLayout/dashboard/card3";
import calendar from "components/BranchLayout/dashboard/calendar";
import notes from "components/BranchLayout/dashboard/notes";
import mainchart from "components/BranchLayout/dashboard/mainchart";
import table1 from "components/BranchLayout/dashboard/dashboard_tbl1";

export default {
  components: {
    card1,
    card2,
    card3,
    calendar,
    notes,
    table1,
    mainchart,
  },

  setup() {
    return {
      days: ref([
        { from: "2023/11/01", to: "2023/11/10" },
        { from: "2023/11/21", to: "2023/11/25" },
      ]),

      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },

  mounted() {
    setTimeout(() => {
      // After data is fetched, update the rows array
      //CHANGE THIS /* your fetched data */;
      this.loading = false;
    }, 2000); // Simulating a 2-second delay (adjust as needed)
  },
};
</script>
<style lang="css" scoped>
.my-card,
.q-date {
  border-radius: 20px;
  width: auto;
  margin: 5px;
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
