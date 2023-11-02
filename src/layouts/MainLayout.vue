<template>
  <q-layout
    view="hHh Lpr lff"
    container
    style="height: 100vh"
    class="text-dark"
  >
    <DrawerHeader />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import DrawerHeader from "components/MainLayout/DrawerHeader";
export default {
  components: {
    DrawerHeader,
  },
};
</script>
