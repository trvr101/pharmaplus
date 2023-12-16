<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-teal text-white" style="border-radius: 0 0 20px 20px">
      <q-toolbar>
        <q-toolbar-title class="text-center q-ml-lg">
          <img
            style="
              height: 35px;
              filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(230deg)
                brightness(1000%);
            "
            class="q-mt-sm colored-img"
            src="/pharmapluslogo.png"
            alt="Pharma Plus Logo"
          />
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-list bordered>
        <q-item clickable v-ripple to="/Login">
          <q-item-section avatar>
            <q-icon color="primary" name="login" />
          </q-item-section>
          <q-item-section>Sign In</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-teal text-white" style="border-radius: 20px 20px 0 0">
      <q-toolbar>
        <q-input
          v-model="search"
          rounded
          type="search"
          label-color="white"
          class="full-width q-pa-sm text-white"
          dense
          outline
          label="Search Here"
        >
          <template v-slot:append>
            <q-icon name="search" color="white" />
          </template>
        </q-input>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
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
