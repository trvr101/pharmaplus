<template>
  <div>
    <q-card flat :bordered="!$q.dark.isActive" class="my-card">
      <q-table
        :rows="filteredProducts"
        :columns="columns"
        row-key="product_id"
        title="Product List"
        class="q-pa-md q-ma-lg"
        rowsPerPage="0"
        rows-per-page-label="Records per page :"
        :rows-per-page-options="[12]"
        separator="none"
        :filter="filter"
      >
        <template v-slot:top-right>
          <q-input
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
            class="q-mt-lg"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn
              icon="edit"
              @click="editProduct(props.row)"
              class="q-mr-xs"
            />
            <q-btn
              icon="delete"
              @click="deleteProduct(props.row)"
              class="q-mr-xs"
            />
            <q-btn
              icon="history"
              @click="viewAuditHistory(props.row)"
              class="q-mr-xs"
            />
          </q-td>
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { api } from "src/boot/axios";
import { Notify } from "quasar";

export default {
  setup() {
    const filter = ref("");
    const filteredProducts = ref([]);

    const editProduct = (product) => {
      // Implement your edit logic here
      console.log("Edit product:", product);
    };

    const deleteProduct = (product) => {
      // Implement your delete logic here
      console.log("Delete product:", product);
    };

    const viewAuditHistory = (product) => {
      // Implement your view audit history logic here
      console.log("View audit history:", product);
    };

    return {
      filter,
      filteredProducts,
      editProduct,
      deleteProduct,
      viewAuditHistory,
    };
  },

  data() {
    return {
      productList: [],
      columns: [
        { name: "upc", label: "UPC", align: "left", field: "upc" },
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
          name: "category",
          label: "Category",
          align: "left",
          field: "category",
        },
        { name: "price", label: "Price", align: "left", field: "price" },
        {
          name: "quantity",
          label: "Quantity",
          align: "left",
          field: "quantity",
        },
        {
          name: "branch_id",
          label: "Branch ID",
          align: "left",
          field: "branch_id",
        },
        { name: "status", label: "Status", align: "left", field: "status" },
        { name: "action", label: "Action", align: "center", field: "action" },
      ],
    };
  },

  methods: {
    async fetchProductList() {
      try {
        const response = await api.get("/ProdList");
        this.productList = response.data;
        this.filteredProducts = this.productList;
      } catch (error) {
        console.error("Error fetching product list:", error);
        Notify.create({
          type: "negative",
          message: "Error fetching product list",
        });
      }
    },
  },

  mounted() {
    this.fetchProductList();
  },
};
</script>

<style scoped>
.my-card {
  border-radius: 25px;
}
</style>
