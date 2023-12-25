<template>
  <q-page-sticky
    position="bottom-right"
    :offset="[18, 18]"
    @keydown="handleKeyDown"
  >
    <q-fab
      icon="keyboard_arrow_up"
      direction="up"
      class="fixed-bottom-right"
      :class="{
        'text-grey-3  bg-secondary ': $q.dark.isActive,
        'text-white  bg-cyan-9 ': !$q.dark.isActive,
      }"
    >
      <q-fab-action
        color="primary"
        @click="onClick"
        icon="qr_code_scanner"
        to="/scanner"
        :class="{
          'text-grey-3  bg-secondary ': $q.dark.isActive,
          'text-white  bg-cyan-9 ': !$q.dark.isActive,
        }"
      ></q-fab-action
      ><q-fab-action
        color="primary"
        @click="open('bottom')"
        icon="add"
        :class="{
          'text-grey-3  bg-secondary ': $q.dark.isActive,
          'text-white  bg-cyan-9 ': !$q.dark.isActive,
        }"
      ></q-fab-action>

      <q-fab-action
        @click="$q.fullscreen.toggle()"
        :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
        :class="{
          'text-grey-3  bg-secondary ': $q.dark.isActive,
          'text-white  bg-cyan-9 ': !$q.dark.isActive,
        }"
      ></q-fab-action>
    </q-fab>
  </q-page-sticky>

  <q-dialog v-model="dialog" :position="position">
    <q-card
      style="width: 100vw; height: 60dvh; border-radius: 40px"
      maximized
      class="q-pa-md"
    >
      <q-tabs
        v-model="tab"
        indicator-color="teal"
        dense
        align="justify"
        switch-indicator
        slide-transition
      >
        <q-tab class="text-primary" name="item" label="item" />
        <q-tab class="text-primary" name="notes" label="notes" />
        <q-tab class="text-primary" name="scheduler" label="sched" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated slide-transition>
        <q-tab-panel name="item">
          <AddItem />
        </q-tab-panel>

        <q-tab-panel name="notes">
          <AddNotes />
        </q-tab-panel>
        <q-tab-panel name="scheduler">
          <AddSched />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-dialog>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import AddItem from "components/MainLayout/forms/AddItem";
import AddNotes from "components/MainLayout/forms/AddNotes";
import AddSched from "components/MainLayout/forms/AddSched";

export default {
  components: {
    AddItem,
    AddNotes,
    AddSched,
  },
  setup() {
    const dialog = ref(false);
    const position = ref("bottom");

    const open = (pos) => {
      position.value = pos;
      dialog.value = true;
    };

    const close = () => {
      dialog.value = false;
    };

    const handleKeyDown = (event) => {
      // Check if Ctrl + Shift + F is pressed
      if (event.ctrlKey && event.shiftKey && event.key === "F") {
        if (dialog.value) {
          close();
        } else {
          open("bottom");
        }
      }
    };

    // Add global event listener on component mount
    onMounted(() => {
      window.addEventListener("keydown", handleKeyDown);
    });

    return {
      tab: ref("item"),
      basic: ref(false),
      dialog,
      position,
      open,
      close, // Include the close function in the return object
      handleKeyDown,
    };
  },
};
</script>
