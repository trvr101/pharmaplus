<template>
  <q-form @submit.prevent="AddItem">
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
      type="submit"
      v-close-popup
    />
  </q-form>
</template>

<script>
import { ref, onMounted } from "vue";
import { api } from "src/boot/axios";

//Select
const Categ = ref([]);
const selectedCateg = ref(null);
const fetchingCateg = ref(false);

export default {
  data() {
    return {
      item_name: "",
      item_strength: "",
      selectedCateg: "",
    };
  },
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
  methods: {
    async AddItem() {
      try {
        const payload = {
          item_name: this.item_name,
          item_strength: this.item_strength,
          category_id: this.selectedCateg
            ? this.selectedCateg.category_id
            : null,
        };

        const response = await api.post("/AddItem", payload);
        console.log(response.data);
      } catch (error) {
        console.error("Error during AddItem:", error);
      }
    },
  },
};
async function fetchCateg() {
  try {
    fetchingCateg.value = true;
    const response = await api.get("/ItemCategoryList");
    Categ.value = response.data;
    //  selectedCateg.value = Categ.value.length > 0 ? Categ.value[0] : null;
  } catch (error) {
    console.error("Error fetching categories:", error);
  } finally {
    fetchingCateg.value = false;
  }
}
</script>
