<template>
  <q-header bordered v-if="$q.screen.gt.xs">
    <q-toolbar>
      <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      <q-toolbar-title
        :class="{
          '': $q.screen.gt.sm,
          'absolute-center': $q.screen.lt.sm,
        }"
        >PharmaPlus+</q-toolbar-title
      >
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
      <q-list class="q-flex">
        <q-item
          clickable
          v-ripple
          :class="{ 'active-item': $route.path === '/dashboard' }"
          to="/dashboard"
        >
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section> Dashboard </q-item-section> </q-item
        ><q-item
          clickable
          v-ripple
          :class="{ 'active-item': $route.path === '/inventory' }"
          to="/inventory"
        >
          <q-item-section avatar>
            <q-icon name="inventory_2" />
          </q-item-section>
          <q-item-section> Inventory </q-item-section> </q-item
        ><q-item
          clickable
          v-ripple
          :class="{ 'active-item': $route.path === '/userManagement' }"
          to="/userManagement"
        >
          <q-item-section avatar>
            <q-icon name="manage_accounts" />
          </q-item-section>
          <q-item-section> User Management</q-item-section> </q-item
        ><q-item
          clickable
          v-ripple
          :class="{ 'active-item': $route.path === '/sales' }"
          to="/sales"
        >
          <q-item-section avatar>
            <q-icon name="store" />
          </q-item-section>

          <q-item-section> Branch </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :class="{ 'active-item': $route.path === '/settings' }"
          to="/settings"
        >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section> Settings </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :class="{ 'active-item': $route.path === '/message' }"
          to="/message"
        >
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <q-item-section> Message </q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple @click="confirm = true">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>

          <q-item-section> logout </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
  <q-dialog v-model="confirm" persistent>
    <q-card id="logout">
      <q-card-section class="row items-center">
        <q-avatar icon="priority_high" color="primary" text-color="white" />
        <span class="q-ml-sm">Do you really want to logout?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Confirm" color="primary" to="/" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      confirm: ref(false),
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
.q-item {
  color: rgb(6, 0, 73);
}
.q-item:hover,
.active-item {
  background-color: #00726123;
  border-radius: 20px;
}
#logout {
  border-radius: 15px;
  padding: 10px;
}

/* .q-list > :first-child {
  border-radius: 20px 20px 0px 20px;
}

/* Target the last child of q-list */
/* .q-list :last-child {
  border-radius: 20px 0px 20px 20px;
} */
</style>
