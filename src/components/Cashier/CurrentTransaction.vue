<template>
  <div class="full-height">
    <q-table
      :rows="transactions"
      :columns="columns"
      row-key="current_transaction_id"
      flat
      :seperator="none"
      :rows-per-page-options="[]"
      no-data-label=" "
      :hide-pagination="true"
    >
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <span> Pharmaplus+</span>
        </div>
      </template>
    </q-table>
    <q-space />
    <div class="q-pl-xs absolute-bottom">Total: {{ total }}</div>
  </div>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  props: {
    order_token: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      transactions: [],
      total: 0,
      columns: [
        {
          name: "product_name",
          label: "Product Name",
          align: "left",
          field: "product_name",
        },
        {
          name: "quantity",
          label: "Quantity",
          align: "center",
          field: "quantity",
        },
        { name: "price", label: "Price", align: "center", field: "price" },
      ],
    };
  },
  methods: {
    fetchData() {
      const token = sessionStorage.getItem("token");
      const url = `/POS/GetItemList/${token}/${this.order_token}`;

      api
        .get(url)
        .then((response) => {
          this.transactions = response.data.transactions;
          this.total = response.data.total;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
  mounted() {
    this.fetchData();

    // Polling every 5 seconds (adjust as needed)
    this.pollingInterval = setInterval(() => {
      this.fetchData();
    }, 1000);
  },
  beforeDestroy() {
    // Clear the polling interval when the component is destroyed
    clearInterval(this.pollingInterval);
  },
};
</script>
