<template>
  <div>
    <q-card flat :bordered="!$q.dark.isActive" class="my-card q-pa-lg">
      <q-table :rows="salesList" :columns="columns" row-key="sales_id">
        <template v-slot:body-cell-[column]="props">
          {{ props.row[column.name] }}
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      salesList: [],
      columns: [
        {
          name: "sales_id",
          label: "Sales ID",
          align: "left",
          field: "sales_id",
        },
        {
          name: "order_id",
          label: "Order ID",
          align: "left",
          field: "order_id",
        },
        {
          name: "product_id",
          label: "Product ID",
          align: "left",
          field: "product_id",
        },
        { name: "price", label: "Price", align: "left", field: "price" },
        {
          name: "quantity",
          label: "Quantity",
          align: "left",
          field: "quantity",
        },
        {
          name: "sub_total",
          label: "Sub Total",
          align: "left",
          field: "sub_total",
        },
        { name: "status", label: "Status", align: "left", field: "status" },
        { name: "user_id", label: "User ID", align: "left", field: "user_id" },
        {
          name: "branch_id",
          label: "Branch ID",
          align: "left",
          field: "branch_id",
        },
        {
          name: "created_at",
          label: "Created At",
          align: "left",
          field: "created_at",
        },
      ],
    };
  },
  mounted() {
    this.fetchSalesList();
  },
  methods: {
    async fetchSalesList() {
      try {
        const response = await api.get("/SalesList");
        this.salesList = response.data;
      } catch (error) {
        console.error("Error fetching sales list:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
