<template>
  <q-layout
    view="hHh Lpr lFf"
    container
    style="height: 100vh"
    class="text-dark"
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
.q-layout {
  background: #f1feff;
}
</style>
