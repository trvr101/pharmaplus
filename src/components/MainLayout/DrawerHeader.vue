<template>
  <q-header bordered>
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
        <q-item clickable v-ripple to="/dashboard">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section> Dashboard </q-item-section> </q-item
        ><q-item clickable v-ripple to="/inventory">
          <q-item-section avatar>
            <q-icon name="inventory_2" />
          </q-item-section>
          <q-item-section> Inventory </q-item-section> </q-item
        ><q-item clickable v-ripple to="/userManagement">
          <q-item-section avatar>
            <q-icon name="manage_accounts" />
          </q-item-section>
          <q-item-section> User Management</q-item-section> </q-item
        ><q-item clickable v-ripple to="/sales">
          <q-item-section avatar>
            <q-icon name="trending_up" />
          </q-item-section>

          <q-item-section> Sales </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/settings">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section> Settings </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/message">
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <q-item-section> Message </q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple to="/dashboard">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>

          <q-item-section> logout </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<script>
import { ref } from "vue";
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

<style>
.q-header {
  background: linear-gradient(90deg, #007261, #007976, rgba(0, 114, 127, 1));
  /* color: #14001f; */
  border-radius: 0 0 25px 25px;
}
.q-drawer {
  border-radius: 0 25px 25px 0;
}
</style>
