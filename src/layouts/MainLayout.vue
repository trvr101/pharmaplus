<template>
  <q-layout
    view="hHh Lpr lFf"
    container
    style="height: 100vh"
    class="text-dark MainLayout"
  >
    <DrawerHeader />

    <q-page-container>
      <router-view style="margin: 10px" />
    </q-page-container>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        color="teal"
        icon="keyboard_arrow_up"
        direction="up"
        class="fixed-bottom-right"
      >
        <q-fab-action
          color="secondary"
          @click="onClick"
          icon="edit_note"
          to="/message"
        /><q-fab-action
          color="secondary"
          @click="onClick"
          icon="qr_code_scanner"
          to="/scanner"
        ></q-fab-action
        ><q-fab-action
          color="secondary"
          @click="fixed = true"
          icon="add"
        ></q-fab-action>
      </q-fab>
    </q-page-sticky>
    <Footer />
  </q-layout>
  <q-dialog v-model="fixed">
    <q-card id="dialogitem">
      <q-card-section class="bg-teal" style="border-radius: 15px">
        <div class="text-h6">Add Items</div>
      </q-card-section>

      <q-card-section style="max-height: 50vh" class="scroll">
        <p v-for="n in 15" :key="n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </p>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import DrawerHeader from "components/MainLayout/DrawerHeader";
import Footer from "components/MainLayout/Footer";
export default {
  components: {
    DrawerHeader,
    Footer,
  },
  setup() {
    return {
      basic: ref(false),
      fixed: ref(false),
    };
  },
};
</script>

<style lang="css">
.MainLayout {
  background: #f1feff;
  /* background: linear-gradient(90deg, #007261, #007976, rgba(0, 114, 127, 1)); */
}
#dialogitem {
  border-radius: 15px;
}
</style>
