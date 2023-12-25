<template>
  <q-form @submit.prevent="AddProd">
    <q-input v-model="prod_name" label="Product name" :dense="dense" />
    <q-input v-model="prod_upc" label="UPC" :dense="dense" />
    <q-input v-model="prod_desc" label="Description" :dense="dense" />
    <q-input v-model="prod_price" label="Price" :dense="dense" type="number" />
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
      label="Add Product"
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

const Categ = ref([]);
const selectedCateg = ref(null);
const fetchingCateg = ref(false);

export default {
  setup() {
    const prod_name = ref("");
    const prod_upc = ref("");
    const prod_desc = ref("");
    const prod_price = ref("");
    const branchId = ref("");
    const userId = ref("");
    const profileData = ref(null);

    onMounted(async () => {
      await fetchCateg();
      await fetchProfile();
    });

    const handleSelectChange = () => {
      document.activeElement.blur();
    };

    const filterCateg = (val, update) => {
      if (selectedCateg.value) {
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

    const AddProd = async () => {
      try {
        const payload = {
          my_user_id: userId.value,
          prod_name: prod_name.value,
          prod_upc: prod_upc.value,
          prod_desc: prod_desc.value,
          prod_price: prod_price.value,
          prod_branch_id: branchId.value,
          category_name: selectedCateg.value
            ? selectedCateg.value.category_name
            : null,
        };

        const response = await api.post("/AddProd", payload);
        console.log(response.data);
      } catch (error) {
        console.error("Error during AddProd:", error);
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
        const token = sessionStorage.getItem("token");
        fetchingCateg.value = true;

        const response = await api.get(`/profile/${token}`);
        profileData.value = response.data;

        // Extract branch_id and user_id
        branchId.value = profileData.value.user.branch_id;
        userId.value = profileData.value.user.user_id;
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        fetchingCateg.value = false;
      }
    };

    return {
      prod_name,
      prod_upc,
      prod_desc,
      prod_price,
      branchId,
      userId,
      profileData,
      selectedCateg,
      fetchingCateg,
      filterCateg,
      handleSelectChange,
      Categ,
      AddProd,
    };
  },
};
</script>
