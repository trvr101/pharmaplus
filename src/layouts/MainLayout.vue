<template>
  <q-layout
    view="lHh Lpr lFf"
    container
    style="height: 100vh"
    class="text-dark MainLayout"
    :class="{ 'text-teal-2 bg-grey-10 ': $q.dark.isActive }"
  >
    <DrawerHeader />
    <q-page-container>
      <router-view class="q-ma-sm q-mt-md" />
    </q-page-container>
    <Footer />
    <FabDialog />
  </q-layout>
</template>
<script>
import DrawerHeader from "components/MainLayout/DrawerHeader";
import Footer from "components/MainLayout/Footer";
import FabDialog from "components/MainLayout/FabDialog";

export default {
  components: {
    DrawerHeader,
    Footer,
    FabDialog,
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
