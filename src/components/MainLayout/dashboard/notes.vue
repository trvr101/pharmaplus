<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <q-btn flat rounded class="absolute-top-right"
        ><q-icon name="add"
      /></q-btn>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-expansion-item
        group="somegroup"
        icon="notes"
        :label="note.note_title"
        default-opened
        header-class="text-primary"
        v-for="(note, index) in notes"
        :key="index"
      >
        <q-card>
          <q-card-section>{{ note.note_text }}</q-card-section>
        </q-card>
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
  },
};
</script>
