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
      <router-view
        :class="{
          'q-ma-sm q-mt-md': $q.screen.gt.sm,
          'no-margin no-padding': $q.screen.lt.sm,
        }"
      />
    </q-page-container>
    <Footer />
    <FabDialog />
  </q-layout>
</template>
<script>
import DrawerHeader from "components/BranchLayout/DrawerHeader";
import Footer from "components/BranchLayout/Footer";
import FabDialog from "components/BranchLayout/FabDialog";
import { useQuasar } from "quasar";

export default {
  components: {
    DrawerHeader,
    Footer,
    FabDialog,
  },
  setup() {
    // equivalent to calling this on creating the component
    const $q = useQuasar();
    $q.addressbarColor.set("cyan-9");
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
