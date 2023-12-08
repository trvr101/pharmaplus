<template>
  <q-form @submit.prevent="AddNotes">
    <q-input v-model="note_title" label="Title:" :dense="dense" />
    <q-input v-model="note_content" type="textarea" label="Description" />
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
      note_title: "",
      note_content: "",
    };
  },
  methods: {
    async AddNotes() {
      try {
        const response = await api.post("/AddNotes", {
          note_title: this.note_title,
          note_content: this.note_content,
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error note insertion:", error);
      }
    },
  },
};
</script>
