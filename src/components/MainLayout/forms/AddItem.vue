<template>
  <q-form @submit.prevent="AddProd">
    <q-input v-model="prod_name" label="Item name" :dense="dense" />
    <q-input v-model="prod_desc" label="Description" :dense="dense" />
    <q-input v-model="prod_price" label="Price" :dense="dense" />
    <q-select
      :loading="fetchingCateg"
      v-model="selectedCateg"
      :options="Categ"
      option-label="category_name"
      option-value="category_name"
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
import { ref } from "vue";
import { api } from "src/boot/axios";

export default {
  setup() {
    const Categ = ref([]);
    const selectedCateg = ref(null);
    const fetchingCateg = ref(false);
    const token = sessionStorage.getItem("token");
    const branchId = ref("");
    const userId = ref("");

    const handleSelectChange = () => {
      document.activeElement.blur();
    };

    const filterCateg = (val, update) => {
      if (selectedCateg) {
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

    const addProduct = async () => {
      try {
        const payload = {
          my_user_id: userId.value,
          branch_id: branchId.value,
          prod_name: prodName.value,
          prod_desc: prodDesc.value,
          prod_price: prodPrice.value,
          category_name: selectedCateg ? selectedCateg.category_name : null,
        };

        // Set a loading indicator
        fetchingCateg.value = true;

        const response = await api.post("/AddProd", payload);
        console.log(response.data);
      } catch (error) {
        console.error("Error during AddItem:", error);
        // Enhance debugging by logging the entire error object
        console.error(error);
        // You can also check if the error has a response for more details
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        }
      } finally {
        // Reset loading indicator regardless of success or failure
        fetchingCateg.value = false;
      }
    };

    const fetchCateg = async () => {
      try {
        fetchingCateg.value = true;
        const response = await api.get("/ItemCategoryList");
        Categ.value = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        fetchingCateg.value = false;
      }
    };

    const fetchProfile = async () => {
      try {
        const response = await api.get(`/profile/${token}`);
        const profileData = response.data;
        branchId.value = profileData.branch_id;
        userId.value = profileData.user_id;
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    // Fetch data on component mount
    fetchCateg();
    fetchProfile();

    return {
      Categ,
      selectedCateg,
      fetchingCateg,
      branchId,
      userId,
      handleSelectChange,
      filterCateg,
      addProduct,
    };
  },
};
</script>
