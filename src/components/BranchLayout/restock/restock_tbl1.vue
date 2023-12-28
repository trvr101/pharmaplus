<template>
  <div>
    <q-card flat :bordered="!$q.dark.isActive" class="my-card">
      <q-table
        :rows="filteredProducts"
        :columns="columns"
        row-key="product_id"
        title="Product List"
        class="q-pa-md q-mb-lg q-mx-lg"
        rowsPerPage="0"
        rows-per-page-label="Records per page :"
        :rows-per-page-options="[10]"
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
            <q-form
              class="fit row no-wrap justify-evenly items-center content-center"
            >
              <q-input
                filled
                v-model="restock"
                label="Restock Quantity"
                dense
                type="number"
                style="width: 150px"
                class="custom-rounded-input"
              />
              <q-input
                filled
                label="Expiration Date"
                v-model="date"
                mask="date"
                :rules="['date']"
                dense
                class="q-pa-none q-ma-none"
                style="width: 175px"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="date" minimal>
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-btn
                icon="send"
                color="teal"
                class="bg-grey-3 text-teal"
                rounded
                unelevated
              />
            </q-form>
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
      // Implement your edit logic here
      console.log("Edit product:", product);
    };

    const deleteProduct = (product) => {
      // Implement your delete logic here
      console.log("Delete product:", product);
    };

    const viewAuditHistory = (product) => {
      console.log("View audit history:", product);
      const token = sessionStorage.getItem("token");

      // Use router.push to navigate to the desired route
      router.push(`/branch/productAudit/${token}/${product.product_id}`);
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
        { name: "index", label: "#", align: "center", field: "index" },
        { name: "upc", label: "UPC", align: "left", field: "upc" },
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
        },
      ],
    };
  },

  methods: {
    async fetchProductList() {
      try {
        const token = sessionStorage.getItem("token");
        const response = await api.get(`/ProdList/${token}`);
        this.productList = response.data;

        // Add an index to each row
        this.productList.forEach((product, index) => {
          product.index = index + 1;
        });

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
.q-unselectable {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>
