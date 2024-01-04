<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      :bordered="!$q.dark.isActive"
      v-if="$q.screen.gt.xs"
      class="q-ma-sm"
      :class="{
        ' bg-secondary ': $q.dark.isActive,
        'bg-teal': !$q.dark.isActive,
      }"
      style="border-radius: 25px"
    >
      <q-toolbar>
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
          class="q-ml-md"
        />
        <q-toolbar-title
          class="q-ml-md"
          :class="{
            '': $q.screen.gt.sm,
            'absolute-center': $q.screen.lt.sm & $q.dark.isActive,
          }"
          >PharmaPlus+</q-toolbar-title
        >

        <q-avatar class="q-mr-md" clickable>
          <img
            src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=_2puhHggeOMAX-3kbyH&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfBF056F2kETrCfpCXvxfO2-MZiE-USLNQBXklQ5qoNgJw&oe=6578236D"
          />
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Robert</div>
                <q-toggle v-model="mobileData" label="Use Mobile Data" />
                <q-toggle v-model="bluetooth" label="Bluetooth" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img
                    src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=_2puhHggeOMAX-3kbyH&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfBF056F2kETrCfpCXvxfO2-MZiE-USLNQBXklQ5qoNgJw&oe=6578236D"
                  />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Robert</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  flat
                  class="bg-teal text-white"
                  size="sm"
                  v-close-popup
                  to="/Login"
                />
              </div>
            </div>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      bordered
      :width="350"
      style="border-radius: none"
    >
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="75"
      style="border-radius: none"
    >
    </q-drawer>

    <q-page-container class="q-ma-lg">
      <q-table
        flat
        bordered
        grid
        title="Products"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
        :rows-per-page-options="[24]"
        card-class="bg-teal text-white"
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body-cell-product_name="props">
          <q-td :props="props">
            <q-btn :clickable="true" flat label="Add to Drawer" dense>
              <template v-slot:default>
                <div @click="addToDrawerList(props.row)">Add to Drawer</div>
              </template>
            </q-btn>
          </q-td>
        </template>
      </q-table>
      <div class="q-mt-lg">
        <q-list>
          <q-item v-for="(product, index) in selectedProductsList" :key="index">
            <q-item-section>{{ product.product_name }}</q-item-section>
            <q-item-section>
              <q-input
                v-model="product.quantity"
                type="number"
                dense
                min="1"
                @input="updateQuantity(index, $event)"
              />
            </q-item-section>
            <q-item-section side>
              <q-btn @click="removeProduct(index)" flat icon="close" dense />
            </q-item-section>
          </q-item>
        </q-list>
        <q-btn @click="clearSelectedProductsList" label="Clear List" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, onMounted } from "vue";
import { api } from "src/boot/axios";

export default {
  setup() {
    const rightDrawerOpen = ref(false);
    const leftDrawerOpen = ref(false);
    const filter = ref("");
    const rows = ref([]);
    const selectedProductsList = ref([]);
    const drawerProducts = ref([]);

    const columnNames = ["product_id", "product_name", "description", "price"];

    const columns = columnNames.map((columnName) => {
      return {
        name: columnName,
        required: true,
        label:
          columnName.charAt(0).toUpperCase() +
          columnName.slice(1).replace(/_/g, " "),
        align: "left",
        field: (row) => row[columnName],
        sortable: true,
      };
    });

    const fetchData = async () => {
      try {
        const response = await api.get("/ProdList");
        rows.value = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });
    const addToDrawerList = (product) => {
      const existingProduct = drawerProducts.value.find(
        (p) => p.product_name === product.product_name
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        drawerProducts.value.push({ ...product, quantity: 1 });
      }
    };

    const updateQuantity = (index, value) => {
      selectedProductsList.value[index].quantity = parseInt(value, 10);
    };

    const removeProduct = (index) => {
      selectedProductsList.value.splice(index, 1);
    };

    const clearSelectedProductsList = () => {
      selectedProductsList.value = [];
    };

    return {
      rightDrawerOpen,
      leftDrawerOpen,
      filter,
      columns,
      rows,
      addToDrawerList,
      selectedProductsList,
      removeProduct,
      clearSelectedProductsList,
      drawerProducts,
    };
  },
};
</script>
