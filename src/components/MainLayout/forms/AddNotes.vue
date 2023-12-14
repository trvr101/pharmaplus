<template>
  <q-form @submit.prevent="AddNotes" class="q-gutter-md q-pa-md">
    <q-row>
      <q-col cols="12" md="6">
        <q-input v-model="note_title" label="Title:" :dense="dense" />
      </q-col>
      <q-col cols="12" md="6">
        <q-input v-model="note_content" type="textarea" label="Description" />
      </q-col>
    </q-row>
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
      my_user_id: "", // Add my_user_id to your data
    };
  },
  methods: {
    async AddNotes() {
      try {
        // Fetch profile data before making the API call
        await this.fetchProfile();

        const response = await api.post("/AddNotes", {
          my_user_id: this.my_user_id, // Use my_user_id from data
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
    async fetchProfile() {
      try {
        const token = sessionStorage.getItem("token");

        const response = await api.get(`/profile/${token}`);
        const profileData = response.data;

        // Extract user_id
        this.my_user_id = profileData.user.user_id;
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },
  },
};
</script>
