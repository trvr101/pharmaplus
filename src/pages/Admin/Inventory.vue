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
    <q-table
      :rows="filteredProdList"
      :columns="columns"
      row-key="product_id"
      :pagination.sync="pagination"
      :rows-per-page-options="[5, 10, 20, 50]"
    />
  </div>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      prodList: [],
      filteredProdList: [],
      pagination: {
        page: 1,
        rowsPerPage: 5,
      },
      categoryFilter: "",
      branchFilter: "",
      statusFilter: "",
      columns: [
        {
          name: "item_number",
          label: "#",
          align: "left",
          field: "item_number",
          sortable: false,
        },
        {
          name: "product_name",
          label: "Product Name",
          align: "left",
          field: "product_name",
          sortable: true,
        },
        {
          name: "description",
          label: "Description",
          align: "left",
          field: "description",
          sortable: true,
        },
        {
          name: "quantity",
          label: "Quantity",
          align: "left",
          field: "quantity",
          sortable: true,
        },
        {
          name: "price",
          label: "Price",
          align: "left",
          field: "price",
          sortable: true,
        },
        {
          name: "category",
          label: "Category",
          align: "left",
          field: "category",
          sortable: true,
        },
        {
          name: "status",
          label: "Status",
          align: "left",
          field: "status",
          sortable: true,
        },
        {
          name: "created_at",
          label: "Created At",
          align: "left",
          field: "created_at",
          sortable: true,
        },
      ],
    };
  },
  async created() {
    // Fetch data using axios
    try {
      const response = await api.get("/ProdList"); // Adjust the API endpoint accordingly
      this.prodList = response.data.map((item, index) => ({
        ...item,
        item_number: index + 1,
      }));
      this.filteredProdList = [...this.prodList];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  computed: {
    categoryOptions() {
      // Extract unique category values from the data
      return [...new Set(this.prodList.map((item) => item.category))];
    },
    branchOptions() {
      // Extract unique branch values from the data
      return [...new Set(this.prodList.map((item) => item.branch))];
    },
    statusOptions() {
      // Extract unique status values from the data
      return [...new Set(this.prodList.map((item) => item.status))];
    },
  },
  watch: {
    categoryFilter() {
      this.filterData();
    },
    branchFilter() {
      this.filterData();
    },
    statusFilter() {
      this.filterData();
    },
  },
  methods: {
    filterData() {
      // Apply filters to the data
      this.filteredProdList = this.prodList.filter((item) => {
        const categoryMatch = this.categoryFilter
          ? item.category === this.categoryFilter
          : true;
        const branchMatch = this.branchFilter
          ? item.branch === this.branchFilter
          : true;
        const statusMatch = this.statusFilter
          ? item.status === this.statusFilter
          : true;
        return categoryMatch && branchMatch && statusMatch;
      });
    },
    filterFn(value, update) {
      // Custom filter function for q-select
      update(() => {
        const needle = value.toLowerCase();
        return this.options.filter((v) => v.toLowerCase().indexOf(needle) > -1);
      });
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
