<template>
  <q-card flat bordered class="my-card">
    <q-card-section class="q-pa-lg">
      <q-btn
        rounded
        class="absolute-top-right q-ma-lg"
        icon="get_app"
        @click="exportTable"
        label="Export"
        color="teal"
        unelevated
      />
    </q-card-section>

    <q-card-section class="q-pt-none q-ma-lg">
      <q-table
        flat
        title="User List"
        :rows="rows"
        :columns="columns"
        row-key="user_id"
        :visible-columns="visibleColumns"
      >
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { exportFile, useQuasar } from "quasar";
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      rows: [],
      columns: [
        {
          name: "user_id",
          label: "User ID",
          align: "left",
          field: "user_id",
          sortable: true,
        },
        {
          name: "email",
          label: "Email",
          align: "left",
          field: "email",
          sortable: true,
        },
        {
          name: "status",
          label: "Status",
          align: "left",
          field: "status",
          sortable: true,
        },
        // Add more column definitions as needed
      ],
      visibleColumns: [],
    };
  },
  mounted() {
    this.fetchUserData();
    setInterval(this.fetchUserData, 1000);
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await api.get("/UserList");
        this.rows = response.data;
        // Set visibleColumns initially to all columns
        this.visibleColumns = this.columns.map((col) => col.name);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
    exportTable() {
      const content = [
        this.columns.map((col) => this.wrapCsvValue(col.label)),
        ...this.rows.map((row) =>
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
      formatted =
        formatted === undefined || formatted === null ? "" : String(formatted);
      formatted = formatted.split('"').join('""');
      // Uncomment the next two lines to escape new lines
      // formatted = formatted.split('\n').join('\\n');
      // formatted = formatted.split('\r').join('\\r');
      return `"${formatted}"`;
    },
    getStatusColor(status) {
      return status === "active" ? "positive" : "negative";
    },
  },
};
</script>
