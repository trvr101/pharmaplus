<template>
  <div>
    <div class="row">
      <div :class="{ 'col-4': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
        <q-card
          class="my-card my-card-inventory"
          flat
          :bordered="!$q.dark.isActive"
        >
          <div class="q-pa-lg">
            <q-select
              label="Category"
              color="teal"
              v-model="categoryFilter"
              :options="categoryOptions"
              use-input
              input-debounce="0"
              @filter="filterFn"
              style="width: 250px"
              class="full-width"
            />
          </div>
        </q-card>
      </div>
      <div :class="{ 'col-4': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
        <q-card
          class="my-card my-card-inventory"
          flat
          :bordered="!$q.dark.isActive"
        >
          <div class="q-pa-lg">
            <q-select
              label="Branch"
              color="teal"
              v-model="branchFilter"
              :options="branchOptions"
              use-input
              input-debounce="0"
              @filter="filterFn"
              style="width: 250px"
              class="full-width"
            />
          </div>
        </q-card>
      </div>
      <div :class="{ 'col-4': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
        <q-card
          class="my-card my-card-inventory"
          flat
          :bordered="!$q.dark.isActive"
        >
          <div class="q-pa-lg">
            <q-select
              label="Status"
              color="teal"
              v-model="statusFilter"
              :options="statusOptions"
              use-input
              input-debounce="0"
              @filter="filterFn"
              style="width: 250px"
              class="full-width"
            />
          </div>
        </q-card>
      </div>
    </div>
    <q-card
      class="my-card my-card-inventory"
      flat
      :bordered="!$q.dark.isActive"
    >
      <table class="q-table">
        <thead>
          <tr>
            <th
              v-for="column in columns"
              :key="column.name"
              style="text-align: left"
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="product in products"
            :key="product.product_id"
            @click="onRowClick(product)"
          >
            <td v-for="column in columns" :key="column.name">
              {{ product[column.field] }}
            </td>
          </tr>
        </tbody>
      </table>
    </q-card>
    <q-dialog v-model="dialog" position="bottom">
      <q-card
        style="width: 100vw; height: 60dvh; border-radius: 40px"
        maximized
        class="q-pa-md"
      >
        <q-card-section>
          <q-card-title> Product Details </q-card-title>
          <!-- Display product details here -->
          <div v-for="column in columns" :key="column.name">
            <strong>{{ column.label }}:</strong>
            {{ selectedProduct[column.field] }}
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Close" color="primary" @click="closeDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      products: [],
      columns: [
        {
          name: "product_id",
          label: "Product ID",
          align: "left",
          field: "product_id",
        },
        {
          name: "product_name",
          label: "Product Name",
          align: "left",
          field: "product_name",
        },
        {
          name: "description",
          label: "Description",
          align: "left",
          field: "description",
        },
        {
          name: "quantity",
          label: "Quantity",
          align: "left",
          field: "quantity",
        },
        { name: "price", label: "Price", align: "left", field: "price" },
        {
          name: "category",
          label: "Category",
          align: "left",
          field: "category",
        },
        { name: "status", label: "Status", align: "left", field: "status" },
        {
          name: "created_at",
          label: "Created At",
          align: "left",
          field: "created_at",
        },
      ],
      dialog: false,
      selectedProduct: {},
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      api
        .get("/ProdList")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    onRowClick(product) {
      console.log("Clicked row with product_id:", product.product_id);
    },
    onRowClick(product) {
      this.selectedProduct = product;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style>
.my-card-inventory {
  margin: 5px;
  border-radius: 20px;
  width: auto;
}
.inventory-container {
  height: 100%;
}
</style>
