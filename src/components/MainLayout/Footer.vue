<template>
  <q-footer
    :bordered="!$q.dark.isActive"
    reveal
    v-if="$q.screen.lt.sm"
    :class="{
      'text-grey-3 bg-secondary ': $q.dark.isActive,
      'bg-cyan-9 shadow-up-1': !$q.dark.isActive,
    }"
  >
    <q-toolbar>
      <q-tabs
        v-model="currentTab"
        class="text-grey-3 row justify-center tabs-container"
        no-caps
      >
        <q-route-tab class="col" to="/dashboard" name="home">
          <q-icon name="home" size="xs" />
        </q-route-tab>

        <q-route-tab class="col" to="/notifications" name="notifications"
          ><q-icon name="notifications" size="xs" />
        </q-route-tab>
        <q-route-tab class="col" to="/settings" name="qr_code_scanner"
          ><q-icon name="person" size="xs"
        /></q-route-tab>
        <q-toggle
          v-model="darkmode"
          checked-icon="dark_mode"
          color="primary"
          keep-color
          unchecked-icon="light_mode"
          class="q-mr-md"
        />
      </q-tabs>
    </q-toolbar>
  </q-footer>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      currentTab: ref("home"),
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

<style scoped>
.q-footer {
  border-radius: 25px 25px 0 0;
  height: 50px;
}
.q-tabs {
  width: 100vw;
}
.q-tab {
  width: 20vw;
}

.tabs-container .q-tabs-scroller {
  justify-content: center !important;
}
</style>
