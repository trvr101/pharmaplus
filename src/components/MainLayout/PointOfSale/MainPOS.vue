<template>
  <div class="q-pa-md">
    <q-table
      grid
      flat
      bordered
      card-class="bg-teal text-white"
      title="Products"
      :rows="rows"
      :columns="columns"
      row-key="item_id"
      :filter="filter"
      hide-header
      @row-click="handleRowClick"
      :rows-per-page-options="[12]"
    >
      <template v-slot:top-right>
        <q-input
          ref="filterInput"
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
    <q-btn>wahhah</q-btn>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { api } from "src/boot/axios";

export default {
  setup() {
    const filter = ref("");

    const columns = [
      {
        name: "item_name",
        required: true,
        label: "Item Name",
        align: "left",
        field: "item_name",
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "strength",
        align: "center",
        label: "Strength",
        field: "strength",
        sortable: true,
      },
      {
        name: "category_id",
        label: "Category ID",
        field: "category_id",
        sortable: true,
      },
    ];

    const rows = ref([]);

    const fetchData = async () => {
      try {
        const response = await api.get("/ItemList");
        console.log("API response:", response.data); // Log the response
        rows.value = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const handleRowClick = (event, row) => {
      console.log("Clicked item_id:", row.item_id);
      // Perform any other actions you need with the clicked item_id
    };

    const handleKeyDown = (event) => {
      // Check if the key combination is Ctrl + Shift + K
      if (event.ctrlKey) {
        // Focus on the filter input using the ref
        this.$refs.filterInput.focus();
      }
    };

    // Polling every 1000ms (1 second)
    const pollingInterval = setInterval(() => {
      fetchData();
    }, 1000);

    onMounted(() => {
      fetchData();
    });

    onBeforeUnmount(() => {
      clearInterval(pollingInterval);
    });

    return {
      filter,
      columns,
      rows,
      handleRowClick,
      handleKeyDown,
    };
  },
};
</script>
