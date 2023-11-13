<template>
  <div class="row">
    <div :class="{ 'col-9': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          {{ lorem }}{{ lorem }}{{ lorem }}{{ lorem }}{{ lorem }}{{ lorem
          }}{{ lorem }}{{ lorem }}{{ lorem }}{{ lorem }}{{ lorem }}{{ lorem
          }}{{ lorem }}
        </q-card-section>
      </q-card>
    </div>
    <div :class="{ 'col-3': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
      <div class="col-12">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <q-card class="my-card" flat bordered
        ><q-table
          :rows="rows"
          :columns="columns"
          row-key="id"
          :rows-per-page-options="[10, 20, 30]"
          :pagination="pagination"
          separator="none"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ props.row[col.name] }}
              </q-td>
              <q-td>
                <q-btn @click="editRow(props.row)" color="teal-1" flat
                  ><q-icon name="edit" color="dark"
                /></q-btn>
                <q-btn @click="deleteRow(props.row.id)" color="negative" flat
                  ><q-icon name="delete" color="dark"
                /></q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card>
    </div>
  </div>
</template>
<!-- <script>
export default {
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script> -->
<script>
export default {
  data() {
    return {
      rows: [],
      columns: [
        { name: "id", label: "ID", align: "left", field: "id", sortable: true },
        {
          name: "name",
          label: "Name",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "email",
          label: "Email",
          align: "left",
          field: "email",
          sortable: true,
        },
      ],
      pagination: {
        rowsPerPage: 10,
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // Fetch data from your Laravel API
      // Example using Axios:
      this.$axios
        .get("http://localhost:8000/api/list")
        .then((response) => {
          this.rows = response.data; // Assuming your API response is an array of objects
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    editRow(row) {
      // Implement your edit logic here
      console.log("Edit row:", row);
    },
    deleteRow(id) {
      // Implement your delete logic here
      console.log("Delete row with ID:", id);
    },
  },
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style>
/* .row > * {
  border: black 1px solid;
} */
.my-card {
  margin: 10px;
  border-radius: 20px;
  width: auto;
}
</style>
