<template>
  <div>
    <q-table
      :rows="userList"
      :columns="columns"
      row-key="user_id"
      :dense="dense"
    >
      <template v-slot:body-cell-avatar="props">
        <div
          class="fit row wrap justify-center items-center content-center q-py-sm"
        >
          <q-avatar color="teal" text-color="white" size="md">
            {{ getInitials(props.row.first_name, props.row.last_name) }}
          </q-avatar>
        </div>
      </template>
      <template v-slot:body-cell-actions="props">
        <div class="fit row wrap justify-center content-start q-py-sm">
          <q-btn
            @click="viewUser(props.row)"
            icon="remove_red_eye"
            size="sm"
            flat
          />
          <q-btn
            @click="editUser(props.row)"
            icon="edit"
            size="sm"
            class="q-ml-md"
            flat=""
          />
          <q-btn
            @click="deleteUser(props.row)"
            icon="delete"
            size="sm"
            class="q-ml-md"
            flat
          />
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
import { api } from "src/boot/axios";

export default {
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
        {
          name: "actions",
          label: "Actions",
          align: "center",
          field: "actions",
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
        const token = sessionStorage.getItem("token");
        if (!token) {
          console.error("Token not found in session storage");
          return;
        }

        const response = await api.get(`/BranchUserList/${token}`);
        this.userList = response.data;
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    },
    getInitials(firstName, lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`;
    },
    viewUser(user) {
      console.log("View user:", user);
      // Add logic for viewing user
    },
    editUser(user) {
      console.log("Edit user:", user);
      // Add logic for editing user
    },
    deleteUser(user) {
      console.log("Delete user:", user);
      // Add logic for deleting user
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
