<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <p class="text-grey-9 q-ma-sm">Notes</p>
      <q-btn outline rounded class="absolute-top-right q-ma-md">
        <q-icon name="add" />
      </q-btn>
    </q-card-section>

    <q-card-section class="q-pt-none q-my-lg">
      <q-expansion-item
        group="somegroup"
        :label="note.note_title"
        header-class="text-black"
        v-for="(note, index) in notes"
        :key="index"
        @hold.native="deleteNoteConfirm(index)"
      >
        <q-card>
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
