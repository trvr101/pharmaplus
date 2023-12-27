<template>
  <div>
    <q-card flat :bordered="!$q.dark.isActive" class="my-card q-my-lg">
      <q-table
        :rows="userList"
        :columns="columns"
        row-key="user_id"
        title="User Management"
        class="q-pa-md q-ma-lg"
        rowsPerPage="0"
        rows-per-page-label="Records per page :"
        :rows-per-page-options="[10]"
        separator="none"
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
        <template v-slot:body-cell-status="props">
          <div class="fit row wrap justify-center items-center content-center">
            <q-chip
              :color="getStatusColor(props.row.status)"
              text-color="white"
              outline
            >
              {{ props.row.status }}
            </q-chip>
          </div>
        </template>
        <template v-slot:body-cell-actions="props">
          <div class="fit row no-wrap justify-center content-start q-py-sm">
            <q-btn
              @click="viewUser(props.row)"
              icon="remove_red_eye"
              size="sm"
              flat
              rounded
              color="teal-7"
            >
              <q-tooltip transition-show="scale" transition-hide="scale">
                view user
              </q-tooltip>
            </q-btn>

            <q-btn
              @click="suspendUser(props.row)"
              icon="remove_circle"
              size="sm"
              class="q-ml-md"
              flat
              rounded
              color="teal-7"
            >
              <q-tooltip transition-show="scale" transition-hide="scale">
                suspend user
              </q-tooltip>
            </q-btn>
          </div>
        </template>
      </q-table>
    </q-card>
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
          label: "",
          align: "center",
          field: "avatar",
          format: (val) => `<q-avatar>${val}</q-avatar>`,
        },
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
        {
          name: "user_role",
          label: "User Role",
          align: "left",
          field: "user_role",
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
          name: "status",
          label: "Status",
          align: "center",
          field: "status",
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
          name: "actions",
          label: "Actions",
          align: "center",
          field: "actions",
        },
      ],
      pollingInterval: null,
    };
  },
  mounted() {
    this.fetchUserList();
    this.pollingInterval = setInterval(this.fetchUserList, 1000);
  },
  beforeDestroy() {
    clearInterval(this.pollingInterval);
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
      this.$router.push(`/userProfile/${user.token}`);
    },
    suspendUser(user) {
      console.log("Suspend user:", user);
      // Add logic for deleting user
    },
    getStatusColor(status) {
      switch (status) {
        case "active":
          return "teal";
        case "inactive":
          return "grey";
        case "suspended":
          return "red-12";
        default:
          return "teal"; // or any default color
      }
    },
  },
};
</script>

<style scoped>
.my-card {
  border-radius: 25px;
}
</style>
