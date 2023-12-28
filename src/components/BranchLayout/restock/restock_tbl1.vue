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
            <q-form @submit.prevent="AddQuantity(props.row.product_id)">
              <div
                class="fit row no-wrap justify-evenly items-center content-center"
              >
                <q-input
                  filled
                  v-model="props.row.restock"
                  label="Restock Quantity"
                  dense
                  type="number"
                  style="width: 150px"
                  class="custom-rounded-input"
                />
                <q-input
                  filled
                  label="Expiration Date"
                  v-model="props.row.date"
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
                        <q-date v-model="props.row.date" minimal>
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
                  type="submit"
                />
              </div>
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

    const getStatusColor = (status) => {
      return status === "available" ? "cyan-9" : "grey";
    };

    return {
      filter,
      filteredProducts,
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
          product.restock = 0; // Initialize restock for each row
          product.date = null; // Initialize date for each row
        });

        this.filteredProducts = this.productList;

        // Log the values for the first row
        if (this.filteredProducts.length > 0) {
          console.log(
            "Restock value for the first row:",
            this.filteredProducts[0].restock
          );
          console.log(
            "Date value for the first row:",
            this.filteredProducts[0].date
          );
        }
      } catch (error) {
        console.error("Error fetching product list:", error);
        Notify.create({
          type: "negative",
          message: "Error fetching product list",
        });
      }
    },
    async AddQuantity(product_id) {
      try {
        const token = sessionStorage.getItem("token");
        const response = await api.post(`/AddQuantity/${product_id}`, {
          quantity: product.restock,
          user_id: "your_user_id", // replace with the actual user_id
          branch_id: "your_branch_id", // replace with the actual branch_id
        });

        if (response.data.msg === "okay") {
          Notify.create({
            type: "positive",
            message: "Quantity added successfully",
          });

          // Log the values after updating
          console.log(
            "Restock value after updating:",
            this.filteredProducts.find((p) => p.product_id === product_id)
              .restock
          );
          console.log(
            "Date value after updating:",
            this.filteredProducts.find((p) => p.product_id === product_id).date
          );

          // Update the product list or perform any other necessary updates
          this.fetchProductList();
        } else {
          Notify.create({
            type: "negative",
            message: "Failed to add quantity",
          });
        }
      } catch (error) {
        console.error("Error adding quantity:", error);
        Notify.create({
          type: "negative",
          message: "Error adding quantity",
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
.custom-rounded-input {
  border-radius: 10px; /* Adjust the value as needed */
}
.q-table {
  overflow-x: hidden;
}
</style>
