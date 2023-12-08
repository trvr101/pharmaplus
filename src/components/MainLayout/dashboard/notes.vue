<template>
  <q-card flat :bordered="!$q.dark.isActive" class="my-card">
    <q-card-section
      :class="{
        'q-pt-none q-py-lg': $q.screen.gt.sm,
        'no-margin': $q.screen.lt.sm,
      }"
    >
      <q-expansion-item
        group="somegroup"
        :header-class="{
          'text-grey-3': $q.dark.isActive,
          'text-grey-9': !$q.dark.isActive,
        }"
        :class="{
          'text-teal-3': $q.dark.isActive,
        }"
        :key="index"
        label="Add Notes"
        expand-icon="add"
        dense-toggle
        default-opened
      >
        <q-card>
          <q-card-section>
            <q-form @submit.prevent="AddNotes">
              <q-input
                v-model="notetitle"
                label="Title:"
                :label-color="secondary"
                :dense="dense" />
              <q-input v-model="notetext" type="textarea" label="Description" />
              <q-btn
                unelevated
                rounded
                label="Add Notes"
                class="full-width q-ma-lg"
                :class="{
                  'text-teal-3 bg-secondary ': $q.dark.isActive,
                  'bg-teal text-grey-3': !$q.dark.isActive,
                }"
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
        :header-class="{
          'text-grey-3': $q.dark.isActive,
          'text-grey-9': !$q.dark.isActive,
        }"
        v-for="(note, index) in notes"
        :key="index"
        @hold.native="deleteNoteConfirm(index)"
      >
        <q-card
          class="text-subtitle1 text-grey-7 text-weight-light"
          :class="{ 'text-grey-3 bg-   ': $q.dark.isActive }"
        >
          <q-card-section>{{ note.note_text }}</q-card-section>

          <q-card-actions align="right">
            <q-checkbox
              left-label
              v-model="note.status"
              color="teal"
              checked-icon="task_alt"
              unchecked-icon="highlight_off"
              @input="updateNoteStatus(note)"
            />
            <q-btn
              icon="edit"
              color="teal"
              flat
              size="sm"
              @click="editNotePopup(note)"
            />
            <q-btn
              icon="delete"
              color="teal"
              flat
              size="sm"
              @click="deleteNoteConfirm(note.note_id)"
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
  },
};
</script>
