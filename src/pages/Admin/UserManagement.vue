<template>
  <div>
    <q-card
      class="my-card my-card-inventory col q-pa-lg"
      flat
      :bordered="!$q.dark.isActive"
    >
      <q-table
        :rows="userList"
        :columns="columns"
        title="User List"
        row-key="user_id"
        :filter="filter"
      >
        <template v-slot:top-right>
          <div class="row items-center">
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
          </div>
        </template>
        <template v-slot:body-cell-avatar="props">
          <div class="fit row wrap justify-center content-start q-pa-md">
            <q-avatar color="teal" text-color="white" size="md">
              {{ getInitials(props.row.first_name, props.row.last_name) }}
            </q-avatar>
          </div>
        </template>
        <template v-slot:body-cell-[column]="props">
          {{ props.row[column.name] }}
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script>
import { api } from "src/boot/axios";
import { ref } from "vue";
export default {
  setup() {
    const filter = ref("");
    return {
      filter,
    };
  },
  data() {
    return {
      userList: [],
      columns: [
        {
          name: "avatar",
          label: "Avatar",
          align: "center",
          field: "avatar",
          format: (val) => `<q-avatar>${val}</q-avatar>`,
        },

        {
          name: "first_name",
          label: "First Name",
          align: "left",
          field: "first_name",
        },
        {
          name: "last_name",
          label: "Last Name",
          align: "left",
          field: "last_name",
        },
        // Include other columns as needed
        { name: "email", label: "Email", align: "left", field: "email" },
        {
          name: "user_role",
          label: "User Role",
          align: "left",
          field: "user_role",
        },
        {
          name: "branch_id",
          label: "Branch ID",
          align: "left",
          field: "branch_id",
        },
        { name: "status", label: "Status", align: "left", field: "status" },
        {
          name: "created_at",
          label: "Created At",
          align: "left",
          field: "created_at",
        },
      ],
    };
  },
  mounted() {
    this.fetchUserList();
  },
  methods: {
    async fetchUserList() {
      try {
        const response = await api.get("/UserList");
        this.userList = response.data;
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    },
    getInitials(firstName, lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`;
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
