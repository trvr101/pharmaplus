<template>
  <q-layout view="hHh lpR fFf" style="overflow: hidden">
    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      :bordered="!$q.dark.isActive"
      width="400"
    >
      <!-- list here the item_id that i clicked in the table -->
    </q-drawer>
    <q-page-container style="height: 100%"
      ><MainPOS /><!-- table inside this -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import MainPOS from "components/MainLayout/PointOfSale/MainPOS.vue";

export default {
  components: {
    MainPOS,
  },
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
