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

      <q-card-section style="height: 50vh; width: 30vw" class="scroll">
        <q-select
          :loading="fetchingCateg"
          v-model="selectedCateg"
          :options="Categ"
          option-label="category_name"
          option-value="category_id"
          label="Category"
        />
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
import { ref, onMounted } from "vue";
import axios from "axios";
import DrawerHeader from "components/MainLayout/DrawerHeader";
import Footer from "components/MainLayout/Footer";

const Categ = ref([]);
const selectedCateg = ref(null);
const fetchingCateg = ref(false);

async function fetchCateg() {
  try {
    fetchingCateg.value = true;
    const response = await axios.get("http://localhost:8080/ItemCategoryList");
    Categ.value = response.data;
    selectedCateg.value = Categ.value.length > 0 ? Categ.value[0] : null;
  } catch (error) {
    console.error("Error fetching categories:", error);
  } finally {
    fetchingCateg.value = false;
  }
}

export default {
  components: {
    DrawerHeader,
    Footer,
  },
  setup() {
    onMounted(() => {
      // Call the fetchCateg function when the component is mounted
      fetchCateg();
    });

    return {
      basic: ref(false),
      fixed: ref(false),
      Categ,
      selectedCateg,
      fetchingCateg,
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
