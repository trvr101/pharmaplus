<template>
  <q-card class="my-card my-card-inventory" flat bordered>
    <q-table
      :rows="items"
      :columns="columns"
      row-key="item_id"
      :rows-per-page-options="[10, 20, 30]"
      separator="horizontal"
    >
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
  </q-card>
</template>

<script>
import { api } from "src/boot/axios";
import { ref } from "vue";

export default {
  data() {
    return {
      items: [],
      columns: [
        {
          name: "item_id",
          label: "Item ID",
          align: "left",
          field: "item_id",
          sortable: true,
        },
        {
          name: "item_name",
          label: "Item Name",
          align: "left",
          field: "item_name",
          sortable: true,
        },
        {
          name: "strength",
          label: "Strength",
          align: "left",
          field: "strength",
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
          name: "category_id",
          label: "Category ID",
          align: "left",
          field: "category_id",
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
        const response = await api.get("/ItemList");
        // Add a 'number' property to each item for the custom column
        this.items = response.data.map((item) => ({ ...item, number: 110 }));
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },
    increment(item) {
      this.$set(item, "number", item.number + 1);
    },
    decrement(item) {
      this.$set(item, "number", item.number - 1);
    },
  },
};
</script>

<style scoped>
.my-card-inventory {
  /* Add your custom styles here */
}
</style>
