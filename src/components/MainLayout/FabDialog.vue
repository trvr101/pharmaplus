<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-fab
      color="primary"
      icon="keyboard_arrow_up"
      direction="up"
      class="fixed-bottom-right"
    >
      <q-fab-action
        text-color="primary"
        color="teal-1"
        @click="onClick"
        icon="edit_note"
        to="/message"
      /><q-fab-action
        text-color="primary"
        color="teal-1"
        @click="onClick"
        icon="qr_code_scanner"
        to="/scanner"
      ></q-fab-action
      ><q-fab-action
        text-color="primary"
        color="teal-1"
        @click="open('bottom')"
        icon="add"
      ></q-fab-action>
    </q-fab>
  </q-page-sticky>

  <q-dialog v-model="dialog" :position="position">
    <q-card
      style="width: 100vw; height: 50dvh; border-radius: 40px"
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
          <div class="text-h6">Note</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
        <q-tab-panel name="scheduler">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref } from "vue";
import AddItem from "components/MainLayout/forms/AddItem";

export default {
  components: {
    AddItem,
  },
  setup() {
    const dialog = ref(false);
    const position = ref("bottom");

    return {
      tab: ref("item"),

      basic: ref(false),
      dialog,
      position,

      open(pos) {
        position.value = pos;
        dialog.value = true;
      },
    };
  },
};
</script>
