<template>
  <q-card flat :bordered="!$q.dark.isActive" class="my-card">
    <q-card-section
      :class="{
        'q-pt-none q-py-lg': $q.screen.gt.sm,
        'no-margin': $q.screen.lt.sm,
      }"
    >
      <!-- Add Notes Expansion Item -->
      <q-expansion-item
        group="somegroup"
        :header-class="{
          'text-grey-3': $q.dark.isActive,
          'text-grey-9': !$q.dark.isActive,
        }"
        :class="{
          'text-teal-3': $q.dark.isActive,
        }"
        label="Add Notes"
        expand-icon="add"
        dense-toggle
        default-opened
      >
        <q-card>
          <q-card-section>
            <q-form @submit.prevent="AddNotes">
              <!-- Title Input -->
              <q-input
                v-model="note_title"
                label="Title:"
                :label-color="secondary"
                :dense="dense"
              />
              <!-- Description Input -->
              <q-input
                v-model="note_content"
                type="textarea"
                label="Description"
              />
              <!-- Add Notes Button -->
              <q-btn
                unelevated
                rounded
                label="Add Notes"
                class="full-width q-ma-lg"
                :class="{
                  'text-teal-3 bg-secondary ': $q.dark.isActive,
                  'bg-cyan-9 text-grey-3': !$q.dark.isActive,
                }"
                type="submit"
                @click="closeAddNotesDialog"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <!-- Edit Notes Dialog -->
      <q-dialog v-model="editDialog" @hide="resetEditData">
        <q-card>
          <q-card-section>
            <q-form @submit.prevent="editNote">
              <!-- Edit Title Input -->
              <q-input
                v-model="editedNoteTitle"
                label="Edit Title:"
                :label-color="secondary"
                :dense="dense"
              />
              <!-- Edit Description Input -->
              <q-input
                v-model="editedNoteText"
                type="textarea"
                label="Edit Description"
              />
              <!-- Update Notes Button -->
              <q-btn
                unelevated
                rounded
                label="Update Notes"
                class="full-width q-ma-lg"
                :class="{
                  'text-teal-3 bg-secondary ': $q.dark.isActive,
                  'bg-teal text-grey-3': !$q.dark.isActive,
                }"
                type="submit"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>

      <!-- Display Notes Expansion Items -->
      <q-expansion-item
        group="somegroup"
        :label="note.note_title"
        :header-class="{
          'text-grey-3': $q.dark.isActive,
          'text-grey-9': !$q.dark.isActive,
        }"
        v-for="(note, index) in notes"
        :key="index"
        @hold.native="openEditDialog(index)"
      >
        <!-- Display Note Card -->
        <q-card
          class="text-subtitle1 text-grey-7 text-weight-light"
          :class="{ 'text-grey-3 bg-   ': $q.dark.isActive }"
        >
          <q-card-section>{{ note.note_content }}</q-card-section>
          <q-card-actions align="right">
            <q-checkbox
              left-label
              v-model="note.status"
              color="teal"
              checked-icon="task_alt"
              unchecked-icon="highlight_off"
              @input="updateNoteStatus(note)"
            >
              <q-tooltip
                v-if="note.status == 'undone'"
                transition-show="scale"
                transition-hide="scale"
              >
                Mark as done
              </q-tooltip>
              <q-tooltip v-else transition-show="scale" transition-hide="scale">
                Mark as undone
              </q-tooltip>
            </q-checkbox>
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
import { ref } from "vue";
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      note_title: "",
      note_content: "",
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
        const token = sessionStorage.getItem("token");

        if (!token) {
          console.error("Token not available in sessionStorage.");
          return;
        }

        const response = await api.post("/AddNotes", {
          note_title: this.note_title,
          note_content: this.note_content,
        });

        this.note_title = "";
        this.note_content = "";

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
          color: "red-5",
          icon: "warning",
          message: "Failed to add note. Please try again.",
        });
      }
    },

    async fetchNotes() {
      try {
        const token = sessionStorage.getItem("token");

        if (!token) {
          console.error("Token not available in sessionStorage.");
          return;
        }

        const response = await api.get(`/notesList/${token}`); // Replace with your API endpoint
        this.notes = response.data;
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    },
    async updateNoteStatus(note) {
      try {
        const token = sessionStorage.getItem("token");

        if (!token) {
          console.error("Token not available in sessionStorage.");
          return;
        }

        const response = await api.put(`/UpdateNoteStatus/${note.note_id}`, {
          status: note.status === "done", // Convert to boolean
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error updating note status:", error);
      }
    },

    async deleteNoteConfirm(noteId) {
      if (window.confirm("Are you sure you want to delete this note?")) {
        try {
          const token = sessionStorage.getItem("token");

          if (!token) {
            console.error("Token not available in sessionStorage.");
            return;
          }

          const response = await api.delete(`/DeleteNote/${noteId}`);
          console.log(response.data);
        } catch (error) {
          console.error("Error deleting note:", error);
        }
      }
    },
  },
};
</script>
