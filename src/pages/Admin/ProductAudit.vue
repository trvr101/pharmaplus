<template>
  <div>
    <q-card flat :bordered="!$q.dark.isActive" class="my-card">
      <q-btn
        @click="$router.go(-1)"
        class="float-top-left q-ma-lg text-cyan-9"
        unelevated
        rounded
        outline
        icon="arrow_back"
      >
      </q-btn>
      <q-table
        :rows="productHistory"
        :columns="columns"
        row-key="audit_id"
        :title="product_name + ' History'"
        class="q-pa-md q-mb-lg q-mx-lg"
        :rows-per-page-options="[10]"
      >
        <!-- Template for the 'Type' column -->
        <template v-slot:body-cell-type="props">
          <q-td :props="props">
            <q-chip
              :color="getTypeColor(props.row.type)"
              text-color="white"
              outline
              class="q-unselectable"
            >
              {{ props.row.type }}
              <!-- Conditional rendering of icons based on 'Type' -->
              <q-icon v-if="props.row.type === 'outbound'" name="trending_up" />
              <q-icon
                v-else-if="props.row.type === 'inbound'"
                name="autorenew"
              />
            </q-chip>
          </q-td>
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script>
import { api } from "src/boot/axios";
import { Notify } from "quasar";

export default {
  data() {
    return {
      productHistory: [],
      columns: [
        {
          name: "index",
          label: "#",
          align: "center",
          field: "index",
        },
        {
          name: "old_quantity",
          label: "Old Quantity",
          align: "center",
          field: "old_quantity",
        },
        {
          name: "quantity",
          label: "Quantity",
          align: "center",
          field: "quantity",
        },
        { name: "total", label: "Total", align: "center", field: "total" },
        // 'Type' column with the template
        {
          name: "type",
          label: "Type",
          align: "center",
          field: "type",
        },
        {
          name: "created_at",
          label: "Created At",
          align: "center",
          field: "created_at",
        },
      ],
      product_name: "", // Initialize product_name
    };
  },
  methods: {
    async fetchProductHistory() {
      try {
        const token = this.$route.params.token;
        const product_id = this.$route.params.product_id;
        const response = await api.get(`/ProductAudit/${token}/${product_id}`);
        this.productHistory = response.data.map((entry, index) => ({
          ...entry,
          index: index + 1,
        }));

        // Set product_name from the first entry in the productHistory array
        if (this.productHistory.length > 0) {
          this.product_name = this.productHistory[0].product_name;
        }
      } catch (error) {
        console.error("Error fetching product history:", error);
        Notify.create({
          type: "negative",
          message: "Error fetching product history",
        });
      }
    },
    getTypeColor(type) {
      // Add logic to determine the color based on the type
      // For example:
      switch (type) {
        case "outbound":
          return "teal";
        case "inbound":
          return "cyan-9";
        // Add more cases as needed
        default:
          return "default";
      }
    },
  },
  mounted() {
    this.fetchProductHistory();
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
</style>
