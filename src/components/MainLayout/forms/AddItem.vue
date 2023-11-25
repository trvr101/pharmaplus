<template>
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
      outline
    />
  </q-form>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

//Select
const Categ = ref([]);
const selectedCateg = ref(null);
const fetchingCateg = ref(false);

export default {
  setup() {
    onMounted(() => {
      // Call the fetchCateg function when the component is mounted
      fetchCateg();
    });
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
      selectedCateg,
      fetchingCateg,
      filterCateg, // Add the filterCateg method to the returned object
      handleSelectChange,
      Categ,
    };
  },
};
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
</script>
