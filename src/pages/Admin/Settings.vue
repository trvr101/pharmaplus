<template>
  <div>
    <!-- Form to input data -->
    <q-form @submit.prevent="submitData">
      <q-input v-model="formData.first_name" label="First Name" />
      <q-input v-model="formData.last_name" label="Last Name" />
      <q-input v-model="formData.email" label="Email" type="email" />
      <q-input v-model="formData.date" label="date" type="date" />

      <q-btn type="submit" label="Submit" color="primary" />
    </q-form>

    <!-- Display data (optional) -->
    <q-card v-if="rows.length" flat bordered>
      <q-table
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
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        birthdate: "",
      },
      rows: [],
      columns: [
        { name: "id", label: "ID", align: "left", field: "id", sortable: true },
        {
          name: "first_name",
          label: "First Name",
          align: "left",
          field: "first_name",
          sortable: true,
        },
        {
          name: "last_name",
          label: "Last Name",
          align: "left",
          field: "last_name",
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
  methods: {
    async submitData() {
      try {
        // Make a POST request with the entered data
        const response = await this.$axios.post(
          "http://localhost:8080/save",
          this.formData
        );

        // Assuming your API response is an array of objects
        this.rows = response.data;
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    },
    // ... other methods ...
  },
};
</script>
