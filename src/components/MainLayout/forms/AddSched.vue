<template>
  <q-form @submit.prevent="AddSched">
    <q-input v-model="event_name" label="Event Name" />
    <q-input
      v-model="startdate"
      mask="date"
      :rules="['date']"
      label="Start Date"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="startdate" minimal flat bordered>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-input v-model="enddate" mask="date" :rules="['date']" label="End Date">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="enddate" minimal flat bordered>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-input v-model="description" autogrow label="Description" />
    <q-btn-toggle
      v-model="privacy"
      spread
      class="my-custom-toggle q-ma-md"
      no-caps
      rounded
      unelevated
      toggle-color="primary"
      color="white"
      text-color="primary"
      :options="[
        { label: 'Only Me', value: 'only me' },
        { label: 'Branch', value: 'branch' },
      ]"
    />
    <q-btn
      unelevated
      rounded
      color="primary"
      label="Add Notes"
      class="full-width q-ma-md"
      outline
      type="submit"
      v-close-popup
    />
  </q-form>
</template>

<script>
import { api } from "src/boot/axios";
import { ref } from "vue";

export default {
  data() {
    return {
      event_name: "",
      startdate: "",
      enddate: "",
      description: "",
      privacy: "",
    };
  },
  methods: {
    async addSched() {
      try {
        const response = await api.post("/AddSched", {
          event_name: this.event_name,
          startdate: this.startdate,
          enddate: this.enddate,
          description: this.description,
          privacy: this.privacy,
        });
        console.log(response.data);

        // Show success notification
        this.$q.notify({
          color: "green-4",
          icon: "check",
          message: "Note added successfully.",
        });
      } catch (error) {
        console.error("Error adding schedule:", error);

        // Show error notification
        this.$q.notify({
          color: "pink-5",
          icon: "warning",
          message: "Failed to add note. Please try again.",
        });
      }
    },
  },
};
</script>

<style>
.my-custom-toggle {
  border: 1px solid #00444a;
}
</style>

<style>
.my-custom-toggle {
  border: 1px solid #00444a;
}
</style>
