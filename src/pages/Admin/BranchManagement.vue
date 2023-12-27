<template>
  <div class="row q-mt-md q-ma-sm">
    <q-card
      class="my-card my-card-inventory col q-pa-lg"
      flat
      :bordered="!$q.dark.isActive"
    >
      <q-table
        :rows="branchData"
        row-key="branch_id"
        :rows-per-page-options="[10, 20, 30]"
        separator="horizontal"
        flat
        title="Branch List"
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
            <q-btn
              rounded
              class="q-ma-lg"
              icon="add"
              @click="open('bottom')"
              label="Add Branch"
              unelevated
              :class="{
                'text-teal-3 bg-secondary ': $q.dark.isActive,
                'bg-cyan-9 text-grey-3': !$q.dark.isActive,
              }"
            />
          </div>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="branch_id" :props="props">
              {{ props.row.branch_id }}
            </q-td>
            <q-td key="branch_name" :props="props">
              {{ props.row.branch_name }}
            </q-td>
            <q-td key="latitude" :props="props">
              {{ props.row.latitude }}
            </q-td>
            <q-td key="magnitude" :props="props">
              {{ props.row.magnitude }}
            </q-td>
            <q-td key="barangay" :props="props">
              {{ props.row.barangay }}
            </q-td>
            <q-td key="opening_time" :props="props">
              {{ props.row.opening_time || "N/A" }}
            </q-td>
            <q-td key="closing_time" :props="props">
              {{ props.row.closing_time || "N/A" }}
            </q-td>
            <q-td key="contact_number" :props="props">
              {{ props.row.contact_number }}
            </q-td>
            <q-td key="email" :props="props">
              {{ props.row.email }}
            </q-td>
            <q-td
              key="CS_invite_code"
              :props="props"
              @click="copyToClipboard(props.row.CS_invite_code)"
            >
              {{ props.row.CS_invite_code }}
            </q-td>
            <q-td
              key="BA_invite_code"
              :props="props"
              @click="copyToClipboard(props.row.BA_invite_code)"
            >
              {{ props.row.BA_invite_code }}
            </q-td>
            <q-td key="created_at" :props="props">
              {{ formatDate(props.row.created_at) }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </div>
  <q-dialog v-model="dialog" :position="position">
    <q-card
      style="width: 100vw; height: 40dvh; border-radius: 40px"
      maximized
      class="q-pa-lg"
      flat
    >
      <div class="text-h6 text-center">Add Branch</div>
      <q-form @submit.prevent="AddBranch">
        <q-input v-model="branch_name" label="Branch Name" :dense="dense" />
        <q-btn
          unelevated
          rounded
          label="Add Product"
          class="full-width q-ma-lg"
          :class="{
            'text-teal-3 bg-secondary ': $q.dark.isActive,
            'bg-cyan-9 text-grey-3': !$q.dark.isActive,
          }"
          type="submit"
          v-close-popup
        />
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import { api } from "src/boot/axios";
import { ref } from "vue";
import { Notify } from "quasar";

export default {
  setup() {
    const dialog = ref(false);
    const position = ref("bottom");
    const filter = ref("");
    const branchData = ref([]);
    const branch_name = ref("");

    const open = (pos) => {
      position.value = pos;
      dialog.value = true;
    };

    const close = () => {
      dialog.value = false;
    };

    const AddBranch = async () => {
      try {
        const payload = {
          branch_name: branch_name.value,
        };

        const response = await api.post("/addBranch", payload);
        console.log(response.data);

        // Show a success notification
        Notify.create({
          color: "teal",
          position: "bottom",
          message: "Branch added successfully",
        });

        // Close the dialog
        close();
      } catch (error) {
        console.error("Error during AddBranch:", error);
        console.error(error);

        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        }

        // Show an error notification
        Notify.create({
          color: "negative",
          position: "bottom",
          message: "Error adding branch",
        });
      }
    };

    const formatDate = (date) => {
      // Implement your date formatting logic here
      return date ? new Date(date).toLocaleDateString() : "N/A";
    };

    const copyToClipboard = (value) => {
      const input = document.createElement("input");
      input.value = value;
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(input);

      Notify.create({
        color: "teal",
        position: "bottom",
        message: "Content copied to clipboard",
      });
    };

    return {
      filter,
      dialog,
      position,
      open,
      close,
      branchData,
      branch_name,
      AddBranch,
      formatDate,
      copyToClipboard,
    };
  },

  mounted() {
    api
      .get("/branch")
      .then((response) => {
        this.branchData = response.data;
      })
      .catch((error) => {
        console.error("Error fetching branch data:", error);
      });
  },
};
</script>
<style>
.my-card {
  border-radius: 25px;
}
</style>
