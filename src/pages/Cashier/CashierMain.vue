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
          :rows-per-page-options="[16]"
          @row-click="handleRowClick"
          card-class="bg-teal text-white"
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
        class="my-card"
        style="height: 91dvh"
      >
        <div class="q-pt-md">
          <q-card-section class="text-h6 text-center"
            >Current Transaction</q-card-section
          >
          <div class="text-center text-caption">
            Order Token: {{ generatedToken }}
          </div>
          <q-card-section>
            <CurrentTransaction :order_token="generatedToken" />
          </q-card-section>
          <q-card-actions>
            <q-form
              @submit.prevent="AddProd"
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
    <q-page-sticky
      position="bottom-right"
      :offset="fabPos"
      @keydown="handleKeyDown"
    >
      <q-fab
        icon="keyboard_arrow_left"
        direction="left"
        class="fixed-bottom-right"
        :class="{
          'text-grey-3  bg-secondary ': $q.dark.isActive,
          'text-white  bg-teal ': !$q.dark.isActive,
        }"
        persistent
        @blur="closeFab"
      >
        <!-- Your FAB actions go here -->
        <q-fab-action
          @click="onClick"
          icon="pause_circle_outline"
          :class="{
            'text-grey-3  bg-secondary ': $q.dark.isActive,
            'text-white  bg-grey-9 ': !$q.dark.isActive,
          }"
          ><q-tooltip> Hold Transaction </q-tooltip></q-fab-action
        >
        <q-fab-action
          color="primary"
          icon="highlight_off"
          :class="{
            'text-grey-3  bg-secondary ': $q.dark.isActive,
            'text-white  bg-red-9 ': !$q.dark.isActive,
          }"
          ><q-tooltip> Clear All </q-tooltip></q-fab-action
        ><q-fab-action
          icon="check_circle_outline"
          :class="{
            'text-grey-3  bg-secondary ': $q.dark.isActive,
            'text-white  bg-green-9 ': !$q.dark.isActive,
          }"
          @click="SubmitCurrentTransaction"
          ><q-tooltip> Submit </q-tooltip></q-fab-action
        >

        <q-fab-action
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          :class="{
            'text-grey-3  bg-secondary ': $q.dark.isActive,
            'text-white  bg-teal ': !$q.dark.isActive,
          }"
        ></q-fab-action>
      </q-fab>
    </q-page-sticky>
  </div>
</template>

<script>
import { api } from "src/boot/axios";
import { ref, onMounted } from "vue";
import { Notify } from "quasar";
import CurrentTransaction from "components/Cashier/CurrentTransaction";
export default {
  components: {
    CurrentTransaction,
  },
  setup() {
    const fabPos = ref([-18, window.innerHeight / 2]);
    return {
      fabPos,
    };
  },
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
          name: "description",
          label: "Description",
          align: "left",
          field: "description",
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
    async SubmitCurrentTransaction() {
      try {
        const token = sessionStorage.getItem("token");
        const response = await api.post(
          `/POS/SubmitOrder/5000/${this.generatedToken}/${token}`
        );
        console.log("API response:", response.data);
      } catch (error) {
        console.error("Error submitting transaction:", error);
      }
    },

    async AddProd() {
      // Validate quantity to ensure it is not negative
      if (this.AddProduct == "") {
        Notify.create({
          type: "negative",
          message: "Cannot be blank",
        });
        return;
      }

      const token = sessionStorage.getItem("token");

      try {
        const response = await api.post(
          `/POS/AddItem/${token}/${this.generatedToken}`, // Fix here
          {
            UPCAndQuantity: this.AddProduct,
          }
        );

        // Handle response as needed
        // Example: Notify.create({ type: 'positive', message: 'Quantity added successfully' });

        // Reset form fields after successful submission
        this.AddProduct = null;
      } catch (error) {
        // Handle error
        console.log(this.generatedToken); // Fix here
        Notify.create({
          type: "negative",
          message: "Error adding quantity",
        });
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
