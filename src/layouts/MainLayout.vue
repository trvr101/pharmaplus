<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh">
    <q-header bordered :class="$q.isActive ? 'bg-secondary' : 'bg-primary'">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>PharmaPlus+</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="210"
      :breakpoint="500"
      bordered
      :class="
        'bg-' + $q.dark.isActive ? 'primary' : 'secondary' + ' text-primary'
      "
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list class="q-flex q-items-center">
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section> Dashbord </q-item-section> </q-item
          ><q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inventory_2" />
            </q-item-section>
            <q-item-section> Inventory </q-item-section> </q-item
          ><q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="manage_accounts" />
            </q-item-section>
            <q-item-section> User Management</q-item-section> </q-item
          ><q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="trending_up" />
            </q-item-section>

            <q-item-section> Sales </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section> Settings </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> Message </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section> logout </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page padding> </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(false),
      miniState: ref(true),
    };
  },
};
</script>
