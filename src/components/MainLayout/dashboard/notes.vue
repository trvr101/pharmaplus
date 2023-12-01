<template>
  <q-card flat bordered class="my-card">
    <q-card-section class="q-pt-none q-my-lg">
      <!--  -->
      <q-expansion-item
        group="somegroup"
        header-class="text-grey-9"
        :key="index"
        label="Add Notes"
        expand-icon="add"
        dense-toggle
        default-opened
      >
        <q-card>
          <q-card-section>
            <q-form @submit.prevent="AddNotes">
              <q-input v-model="notetitle" label="Title:" :dense="dense" />
              <q-input
                v-model="notetext"
                type="textarea"
                label="Description" /><q-btn
                unelevated
                rounded
                color="teal"
                label="Add Notes"
                class="full-width q-ma-lg"
                type="submit"
                v-close-popup /></q-form
          ></q-card-section>

          <!-- Show delete icon -->
        </q-card>
      </q-expansion-item>
      <!--  -->
      <q-expansion-item
        group="somegroup"
        :label="note.note_title"
        header-class="text-grey-9"
        v-for="(note, index) in notes"
        :key="index"
        @hold.native="deleteNoteConfirm(index)"
      >
        <q-card class="text-subtitle1 text-grey-7 text-weight-light">
          <q-card-section>{{ note.note_text }}</q-card-section>

          <!-- Show delete icon -->
          <q-card-actions align="right">
            <q-btn
              icon="edit"
              color="primary"
              flat
              @click="deleteNoteConfirm(index)"
            />
            <q-btn
              icon="delete"
              color="primary"
              flat
              @click="deleteNoteConfirm(index)"
            />
          </q-card-actions>
        </q-card>
        <q-separator class="q-mx-md" />
      </q-expansion-item>
    </q-card-section>
  </q-card>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      notetitle: "",
      notetext: "",
      notes: [], // Array to store fetched notes
    };
  },
  created() {
    // Fetch data when the component is created
    this.fetchNotes();

    // Set up a polling mechanism to fetch data every 5 seconds (adjust as needed)
    setInterval(this.fetchNotes, 1000);
  },
  methods: {
    async AddNotes() {
      try {
        const response = await api.post("/AddNotes", {
          note_title: this.notetitle,
          note_text: this.notetext,
        });
        this.notetitle = "";
        this.notetext = "";
        console.log(response.data);
      } catch (error) {
        console.error("Error note insertion:", error);
      }
    },
    async fetchNotes() {
      try {
        const response = await api.get("/NotesList"); // Replace with your API endpoint
        this.notes = response.data;
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    },
    deleteNoteConfirm(index) {
      // You can use a dialog or confirmation modal to confirm the deletion
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this note?"
      );
      if (isConfirmed) {
        this.deleteNote(index);
      }
    },
    async deleteNote(index) {
      try {
        const noteId = this.notes[index].note_id;
        await api.delete(`/notes/${noteId}`);
        // Remove the deleted note from the local array to trigger a re-render
        this.notes.splice(index, 1);
      } catch (error) {
        console.error("Error deleting note:", error);
      }
    },
  },
};
</script>
