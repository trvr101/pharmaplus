<template>
  <q-header
    :bordered="!$q.dark.isActive"
    v-if="$q.screen.gt.xs"
    class="q-ma-sm"
    :class="{
      ' bg-secondary ': $q.dark.isActive,
      'bg-teal': !$q.dark.isActive,
    }"
  >
    <q-toolbar>
      <q-btn
        flat
        @click="drawer = !drawer"
        round
        dense
        icon="menu"
        class="q-ml-md"
      />
      <q-toolbar-title
        class="q-ml-md"
        :class="{
          '': $q.screen.gt.sm,
          'absolute-center': $q.screen.lt.sm & $q.dark.isActive,
        }"
        >PharmaPlus+</q-toolbar-title
      >
      <q-space />
      <!-- Dark Mode toggle -->
      <q-toggle
        v-model="darkmode"
        checked-icon="dark_mode"
        color="primary"
        keep-color
        unchecked-icon="light_mode"
        class="q-mr-md"
      />
      <q-btn class="q-mr-md" flat rounded>
        <q-icon name="notifications" size="sm" />
      </q-btn>
      <q-avatar class="q-mr-md">
        <img
          src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=_2puhHggeOMAX-3kbyH&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfBF056F2kETrCfpCXvxfO2-MZiE-USLNQBXklQ5qoNgJw&oe=6578236D"
        />
      </q-avatar>
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
    :bordered="!$q.dark.isActive"
    :class="{
      'bg-teal': !$q.dark.isActive,
      'bg-teal-1 item-dark': !$q.dark.isActive,
    }"
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
          :class="{ 'active-item': $route.path === '/restock' }"
          to="/restock"
        >
          <q-item-section avatar>
            <q-icon name="autorenew" />
          </q-item-section>
          <q-item-section> Restock </q-item-section> </q-item
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
          :class="{ 'active-item': $route.path === '/mapping' }"
          to="/mapping"
        >
          <q-item-section avatar>
            <q-icon name="map" />
          </q-item-section>

          <q-item-section> Mapping </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :class="{ 'active-item': $route.path === '/pointofsale' }"
          to="/pointofsale"
        >
          <q-item-section avatar>
            <q-icon name="point_of_sale" />
          </q-item-section>

          <q-item-section> Point of Sale </q-item-section>
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

        <!-- <q-item
                clickable
                v-ripple
                :class="{ 'active-item': $route.path === '/message' }"
                to="/message"
              >
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>

                <q-item-section> Message </q-item-section>
              </q-item> -->

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
        <q-btn flat label="Confirm" color="primary" @click="logout" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, getCurrentInstance } from "vue";

export default {
  setup() {
    const confirm = ref(false);
    const drawer = ref(false);
    const miniState = ref(true);

    const { proxy } = getCurrentInstance(); // Get the current instance

    const logout = () => {
      // Clear session storage
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user_role");

      // Navigate to the login page
      if (proxy.$router) {
        proxy.$router.push("/login");
      } else {
        console.error("Router is not available.");
      }
    };

    return {
      confirm,
      drawer,
      miniState,
      tab: "",
      logout,
      darkmode: ref(false),
    };
  },
  watch: {
    darkmode(newVal) {
      this.$q.dark.set(newVal ? "auto" : false);
    },
  },
};
</script>

<style>
.q-header {
  background: linear-gradient(90deg, #007261, #007976, rgba(0, 114, 127, 1));
  /* color: #14001f; */
  border-radius: 25px;
}
.active-item {
  background-color: #5b7e7a;
  border-radius: 20px;
  color: aliceblue;
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
.q-drawer {
  border-radius: 20px;
}
</style>
