<template>
  <q-layout
    view="hHh Lpr lFf"
    container
    style="height: 100vh"
    class="text-dark MainLayout"
  >
    <DrawerHeader />

    <q-page-container>
      <router-view />
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
          @click="open('bottom')"
          icon="add"
        ></q-fab-action>
      </q-fab>
    </q-page-sticky>
    <Footer />
  </q-layout>
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
        <q-tab class="text-primary" name="alarms" label="Alarms" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated slide-transition>
        <q-tab-panel name="item">
          <q-form>
            <q-input v-model="item_name" label="Item name" :dense="dense" />
            <q-input v-model="item_strength" label="Strength" :dense="dense" />
            <q-select
              :loading="fetchingCateg"
              v-model="selectedCateg"
              :options="Categ"
              option-label="category_name"
              option-value="category_id"
              label="Category"
              input-debounce="500"
              :filter="!selectedCateg"
              :filter-method="filterCateg"
              rounded
              @update:model-value="handleSelectChange"
            />
            <q-btn
              unelevated
              rounded
              color="primary"
              label="Add Item"
              class="full-width q-ma-lg"
            />
          </q-form>
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
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
    //  selectedCateg.value = Categ.value.length > 0 ? Categ.value[0] : null;
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
    const dialog = ref(false);
    const position = ref("bottom");
    const handleSelectChange = () => {
      // Blur the q-select to remove focus
      document.activeElement.blur();
    };
    const filterCateg = (val, update) => {
      if (selectedCateg) {
        // If an item is selected, do not perform filtering
        update(() => Categ.value);
        return;
      }

      if (val === "") {
        update(() => Categ.value);
        return;
      }

      const filtered = Categ.value.filter((item) => {
        return item.category_name.toLowerCase().startsWith(val.toLowerCase());
      });

      update(() => filtered);
    };

    return {
      tab: ref("item"),

      basic: ref(false),
      dialog,
      position,
      Categ,
      selectedCateg,
      fetchingCateg,
      open(pos) {
        position.value = pos;
        dialog.value = true;
      },
      filterCateg, // Add the filterCateg method to the returned object
      handleSelectChange,
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
