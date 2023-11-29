<template>
  <q-form @submit.prevent="AddNotes">
    <q-input v-model="notetitle" label="Title:" :dense="dense" />
    <q-input v-model="notetext" type="textarea" label="Description" />
    <q-btn
      unelevated
      rounded
      color="primary"
      label="Add Notes"
      class="full-width q-ma-lg"
      outline
      type="submit"
      v-close-popup
    />
  </q-form>
</template>
<script>
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      notetitle: "",
      notetext: "",
    };
  },
  methods: {
    async AddNotes() {
      try {
        const response = await api.post("/AddNotes", {
          note_title: this.notetitle,
          note_text: this.notetext,
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error note insertion:", error);
      }
    },
  },
};
</script>
