<template>
  <div class="row">
    <q-card
      class="my-card my-card-inventory col"
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
          <div class="row">
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
              @click="openDialog"
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
            <q-td key="CS_invite_code" :props="props">
              {{ props.row.CS_invite_code }}
            </q-td>
            <q-td key="BA_invite_code" :props="props">
              {{ props.row.BA_invite_code }}
            </q-td>
            <q-td key="created_at" :props="props">
              {{ props.row.created_at }}
            </q-td>
          </q-tr>
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
    return {
      filter: ref(""),
    };
  },
  data() {
    return {
      branchData: [],
    };
  },
  mounted() {
    // Fetch data from your REST API using Axios
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
