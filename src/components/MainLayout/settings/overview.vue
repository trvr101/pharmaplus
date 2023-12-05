<template>
  <q-card flat bordered class="my-card q-mb-lg" style="overflow: hidden"
    ><div class="q-pa-lg">
      <q-icon name="work_history" size="md" color="primary" />
      <q-table
        flat
        title="Recent Activity List"
        :rows="rows"
        :columns="columns"
        row-key="name"
        v-model:pagination="pagination"
        hide-pagination
      />

      <div class="row justify-center q-mt-md">
        <q-pagination
          v-model="pagination.page"
          color="primary"
          :max="pagesNumber"
          size="sm"
        />
      </div>
    </div>
    <q-linear-progress :value="1" color="teal-3" :max="100"
  /></q-card>
  <q-card flat bordered class="my-card q-my-lg" style="overflow: hidden">
    <div class="q-pa-lg">
      <q-timeline color="teal">
        <q-timeline-entry heading class="text-primary">
          Schedule
        </q-timeline-entry>

        <q-timeline-entry title="Event" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event"
          subtitle="February 21, 1986"
          icon="delete"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
    <q-linear-progress :value="1" color="teal-3" :max="100" />
  </q-card>
  <q-card flat bordered class="my-card q-mb-lg" style="overflow: hidden"
    ><div class="q-pa-lg">
      <q-icon name="work_history" size="md" color="primary" />
      <q-table
        flat
        title="Recent Transactions"
        :rows="rows"
        :columns="columns"
        row-key="name"
        v-model:pagination="pagination"
        hide-pagination
      />

      <div class="row justify-center q-mt-md">
        <q-pagination
          v-model="pagination.page"
          color="primary"
          :max="pagesNumber"
          size="sm"
        />
      </div>
    </div>
    <q-linear-progress :value="1" color="teal-3" :max="100"
  /></q-card>
</template>

<script>
import { ref, computed } from "vue";

const columns = [
  {
    name: "desc",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
  },
];

export default {
  setup() {
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 2,
      rowsPerPage: 5,
      // rowsNumber: xx if getting data from a server
    });

    return {
      pagination,
      columns,
      rows,

      pagesNumber: computed(() =>
        Math.ceil(rows.length / pagination.value.rowsPerPage)
      ),
    };
  },
};
</script>
