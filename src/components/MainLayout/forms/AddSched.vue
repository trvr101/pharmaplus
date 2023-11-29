<template>
  <q-form @submit.prevent="AddSched">
    <q-input
      v-model="startdate"
      mask="date"
      :rules="['date']"
      placeholder="Start Date"
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
      </template> </q-input
    ><q-input
      v-model="enddate"
      mask="date"
      :rules="['date']"
      placeholder="End Date"
    >
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
    <q-input v-model="description" autogrow placeholder="Description" />

    <q-btn-toggle
      v-model="privacy"
      spread
      class="my-custom-toggle q-my-lg"
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
      label="Add Schedule"
      class="full-width"
      outline
      type="submit"
      v-close-popup
      to="#note"
    />
  </q-form>
</template>
<script>
import { api } from "src/boot/axios";
import { ref } from "vue";

export default {
  data() {
    return {
      startdate: "",
      enddate: "",
      description: "",
      privacy: "",
    };
  },
  methods: {
    async AddSched() {
      try {
        const response = await api.post("/AddSched", {
          startdate: this.startdate,
          enddate: this.enddate,
          description: this.description,
          privacy: this.privacy,
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  },
  setup() {
    return {
      startdate: ref(""),
      enddate: ref(""),
      privacy: ref("only me"),
    };
  },
};
</script>
<style>
.my-custom-toggle {
  border: 1px solid #00444a;
}
</style>
