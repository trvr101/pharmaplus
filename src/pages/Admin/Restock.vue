<template>
  <div class="inventory-container">
    <div>
      <div class="row" v-if="condition">
        <div :class="{ 'col-4': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
          <card1 />
        </div>
        <div :class="{ 'col-4': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
          <card2 />
        </div>
        <div :class="{ 'col-4': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
          <card3 />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table1 />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import card1 from "components/MainLayout/restock/card1";
import card2 from "components/MainLayout/restock/card2";
import card3 from "components/MainLayout/restock/card3";
import table1 from "components/MainLayout/restock/restock_tbl1";
export default {
  components: {
    card1,
    card2,
    card3,
    table1,
  },
};
</script>
<style>
/* .row > * {
    border: black 1px solid;
  } */
.my-card-inventory {
  margin: 5px;
  border-radius: 20px;
  width: auto;
}
.inventory-container {
  height: 100%;
}
</style>
