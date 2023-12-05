<template>
  <q-footer bordered reveal v-if="$q.screen.lt.sm" class="bg-teal shadow-up-1">
    <q-toolbar>
      <q-tabs
        v-model="currentTab"
        class="text-grey-3 row justify-center tabs-container"
        no-caps
      >
        <q-route-tab class="col" to="/dashboard" name="home">
          <q-icon name="home" size="xs" />
        </q-route-tab>
        <q-route-tab class="col" to="/message" name="mail"
          ><q-icon name="mail" size="xs" />
        </q-route-tab>

        <q-route-tab class="col" to="/notifications" name="notifications"
          ><q-icon name="notifications" size="xs" />
        </q-route-tab>
        <q-route-tab class="col" to="/settings" name="qr_code_scanner"
          ><q-icon name="person" size="xs"
        /></q-route-tab>
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
    };
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
