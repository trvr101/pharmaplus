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

        // Show success notification
        this.$q.notify({
          color: "teal",
          icon: "check_circle",
          message: "Note added successfully",
        });

        console.log(response.data);
      } catch (error) {
        console.error("Error note insertion:", error);

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
