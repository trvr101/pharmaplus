<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh">
    <DrawerHeader />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import DrawerHeader from "components/MainLayout/DrawerHeader.vue";
export default {
  setup() {
    return {
      drawer: ref(false),
      miniState: ref(true),
      tab: ref(""),
    };
  },
};
</script>
