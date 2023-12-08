<template>
  <q-card class="my-card my-card-inventory" flat :bordered="!$q.dark.isActive">
    <q-card-section class="q-pa-lg">
      <q-btn
        rounded
        class="absolute-top-right q-ma-lg"
        icon="file_download"
        @click="exportTable"
        label="report"
        unelevated
        :class="{
          'text-teal-3 bg-secondary ': $q.dark.isActive,
          'bg-teal text-grey-3': !$q.dark.isActive,
        }"
      />
    </q-card-section>
    <q-card-section class="q-pt-none q-ma-lg">
      <q-table
        :rows="items"
        :columns="columns"
        row-key="item_id"
        :rows-per-page-options="[10, 20, 30]"
        separator="horizontal"
        flat
        title="Item List"
        :filter="filter"
      >
        <template v-slot:top-left>
          <q-input
            :dense="dense"
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <!-- ... Other columns ... -->
        <template v-slot:body-cell-number="props">
          <q-td :props="props">
            <div class="row items-center">
              <q-btn
                @click="decrement(props.row)"
                color="teal"
                push
                round
                class="q-mr-sm"
                icon="remove"
                outline
              />

              <span class="q-mx-md">
                {{ props.row.number }}
              </span>

              <q-btn
                @click="increment(props.row)"
                color="teal"
                push
                round
                icon="add"
                outline
              />
            </div>
          </q-td>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { exportFile, useQuasar } from "quasar";
import { api } from "src/boot/axios";
import { ref } from "vue";

export default {
  setup() {
    return {
      filter: ref(""),
    };
  },
  data() {
    return {
      items: [],
      columns: [
        {
          name: " product_id",
          label: "Item ID",
          align: "left",
          field: "product_id",
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
          name: "price",
          label: "Price",
          align: "left",
          field: "price",
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
          name: "category",
          label: "Category ID",
          align: "left",
          field: "category",
          sortable: true,
        },
        {
          name: "created_at",
          label: "Created At",
          align: "left",
          field: "created_at",
          sortable: true,
        },
        {
          name: "number",
          label: "Number",
          align: "left",
          field: "number",
          sortable: true,
        },
      ],
    };
  },
  mounted() {
    this.fetchItems();
    // Poll for data every 5 seconds
    setInterval(this.fetchItems, 1000);
  },
  methods: {
    async fetchItems() {
      try {
        const response = await api.get("/ProdList");
        // Add a 'number' property to each item for the custom column
        this.items = response.data.map((item) => ({ ...item, number: 0 }));
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },
    exportTable() {
      const content = [
        this.columns.map((col) => this.wrapCsvValue(col.label)),
        ...this.items.map((row) =>
          this.columns
            .map((col) =>
              this.wrapCsvValue(
                typeof col.field === "function"
                  ? col.field(row)
                  : row[col.field === undefined ? col.name : col.field],
                col.format,
                row
              )
            )
            .join(",")
        ),
      ].join("\r\n");

      const status = exportFile("user-list.csv", content, "text/csv");

      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning",
        });
      }
    },
    wrapCsvValue(val, formatFn, row) {
      let formatted = formatFn !== undefined ? formatFn(val, row) : val;

      // Format date specifically for Excel
      if (formatted instanceof Date) {
        formatted = formatted.toISOString().split("T")[0];
      }

      formatted =
        formatted === undefined || formatted === null ? "" : String(formatted);
      formatted = formatted.split('"').join('""');

      return `"${formatted}"`;
    },
  },
};
</script>

<style scoped>
.my-card-inventory {
  /* Add your custom styles here */
}
</style>
