<template>
  <div class="row">
    <div
      class="q-pa-md"
      :class="{
        'col-9': $q.screen.gt.sm,
        'col-12 no-margin no-padding': $q.screen.lt.sm,
      }"
    >
      <q-scroll-area class="fit" visible="false">
        <q-table
          flat
          bordered
          grid
          grid-header
          title="Products"
          :rows="rows"
          :columns="columns"
          row-key="product_id"
          :filter="filter"
          hide-header
          :rows-per-page-options="[16]"
          @row-click="handleRowClick"
          :rows-class="'custom-row-class'"
        >
          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
      </q-scroll-area>
    </div>

    <div
      :class="{
        'col-3': $q.screen.gt.sm,
        'col-12 no-margin no-padding': $q.screen.lt.sm,
      }"
    >
      <!-- MAKE THIS A DIALOG DURING MOBILE VIEW WITH FULL WIDTH   -->
      <q-card
        flat
        :bordered="!$q.dark.isActive"
        class="my-card q-mb-sm"
        style="height: 90dvh"
        v-if="$q.screen.gt.sm"
      >
        <div class="q-pa-md">
          <q-card-section class="text-h6 text-center"
            >Current Transaction</q-card-section
          >
          <q-card-section>
            <q-input
              v-model="generatedToken"
              :readonly="true"
              borderless
              dense
              flat
              class="text-caption q-unselectable"
            ></q-input>
          </q-card-section>
          <q-card-actions>
            <q-form
              class="full-width absolute-bottom q-pa-md"
              :class="{ 'absolute-bottom': $q.screen.gt.sm }"
            >
              <q-input
                v-model="AddProduct"
                label="Add Product"
                class="full-width"
                ref="AddProductInput"
              />
            </q-form>
          </q-card-actions>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
import { api } from "src/boot/axios";
export default {
  data() {
    return {
      generatedToken: this.tokenMaker(10),
      rows: [], // Add rows to hold the fetched data
      columns: [
        // Define columns based on your API response structure
        {
          name: "product_name",
          label: "Product Name",
          align: "left",
          field: "product_name",
          sortable: true,
        },
        {
          name: "upc",
          label: "UPC",
          align: "left",
          field: "upc",
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
          align: "center",
          field: "quantity",
          sortable: true,
        },
        {
          name: "price",
          label: "Price",
          align: "center",
          field: "price",
          sortable: true,
        },
        {
          name: "category",
          label: "Category",
          align: "center",
          field: "category",
          sortable: true,
        },
        {
          name: "status",
          label: "Status",
          align: "center",
          field: "status",
          sortable: true,
        },
        {
          name: "created_at",
          label: "Created At",
          align: "center",
          field: "created_at",
          sortable: true,
        },
      ],
      filter: "",
      AddProduct: "", // Initialize AddProduct
    };
  },
  methods: {
    async fetchData() {
      try {
        const token = sessionStorage.getItem("token");
        const response = await api.get(`/BranchProduct/${token}`);
        this.rows = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    tokenMaker(length) {
      const characters =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      return Array.from(
        { length },
        () => characters[Math.floor(Math.random() * characters.length)]
      ).join("");
    },
    regenerateToken() {
      this.generatedToken = this.tokenMaker(10);
    },

    handleRowClick(evt, row) {
      // Extract the 'upc' value from the clicked row
      this.AddProduct = "";
      const upc = row.upc;

      // Display the 'upc' value on the console
      console.log("Clicked row UPC:", upc);

      // Set the 'AddProduct' value to the 'upc' value
      this.AddProduct = this.AddProduct + upc + "@";

      // Use $nextTick to wait for the next DOM update cycle
      this.$nextTick(() => {
        // Focus on the AddProduct input using refs
        this.$refs.AddProductInput.$el.focus();
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
.my-card {
  border-radius: 25px;
}
.q-unselectable {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.custom-row-class {
  border-radius: 15px;
}
</style>
