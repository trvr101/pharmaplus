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

    <Footer />
  </q-layout>
</template>

<script>
import DrawerHeader from "components/MainLayout/DrawerHeader";
import Footer from "components/MainLayout/Footer";

export default {
  components: {
    DrawerHeader,
    Footer,
  },
};
</script>

<style lang="css">
.MainLayout {
  background: #f1feff;
  /* background: linear-gradient(90deg, #007261, #007976, rgba(0, 114, 127, 1)); */
}
</style>
