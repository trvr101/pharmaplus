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

        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <div
              class="fit row wrap justify-center items-center content-center"
            >
              <q-chip
                :color="getStatusColor(props.row.status)"
                text-color="white"
                outline
                class="q-unselectable"
              >
                {{ props.row.status }}
              </q-chip>
            </div>
          </q-td>
        </template>

        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn
              icon="edit"
              @click="editProduct(props.row)"
              class="q-mr-xs"
              flat
              color="cyan-9"
              rounded
            />

            <q-btn
              icon="history"
              @click="viewAuditHistory(props.row)"
              class="q-mr-xs"
              flat
              color="cyan-9"
              rounded
            />
            <q-btn
              icon="delete"
              @click="deleteProduct(props.row)"
              class="q-mr-xs"
              flat
              color="cyan-9"
              rounded
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
import { useRouter } from "vue-router";

export default {
  setup() {
    const filter = ref("");
    const filteredProducts = ref([]);
    const router = useRouter();

    const editProduct = (product) => {
      console.log("Edit product:", product);
    };

    const deleteProduct = (product) => {
      console.log("Delete product:", product);
    };

    const viewAuditHistory = (product) => {
      console.log("View audit history:", product);
      const token = sessionStorage.getItem("token");
      router.push(`/ProductAudit/${token}/${product.product_id}`);
    };

    const getStatusColor = (status) => {
      return status === "available" ? "cyan-9" : "grey";
    };

    return {
      filter,
      filteredProducts,
      editProduct,
      deleteProduct,
      viewAuditHistory,
      getStatusColor,
    };
  },

  data() {
    return {
      productList: [],
      columns: [
        {
          name: "index",
          label: "#",
          align: "center",
          field: "index",
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
          name: "category",
          label: "Category",
          align: "left",
          field: "category",
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
          name: "quantity",
          label: "Quantity",
          align: "left",
          field: "quantity",
          sortable: true,
        },
        {
          name: "branch_id",
          label: "Branch ID",
          align: "left",
          field: "branch_id",
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
          name: "action",
          label: "Action",
          align: "center",
          field: "action",
          sortable: true,
        },
      ],
    };
  },

  methods: {
    async fetchProductList() {
      const response = await api.get("/ProdList");
      this.productList = response.data;
      this.productList.forEach((product, index) => {
        product.index = index + 1;
      });
      this.filteredProducts = this.productList;
    },
    startPolling() {
      this.fetchProductList(); // Initial fetch
      this.pollingTimer = setInterval(() => {
        this.fetchProductList(); // Fetch data at regular intervals
      }, 1000); // Poll every 5 seconds (adjust as needed)
    },
    stopPolling() {
      clearInterval(this.pollingTimer);
    },
  },

  mounted() {
    this.startPolling(); // Start polling when the component is mounted
  },

  beforeDestroy() {
    this.stopPolling(); // Stop polling when the component is about to be destroyed
  },
};
</script>

<style scoped>
.my-card {
  border-radius: 25px;
}
.q-unselectable {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>
