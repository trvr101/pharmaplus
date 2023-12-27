<template>
  <div class="row">
    <q-col :class="{ 'col-3': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
      <card1 />
      <card5 />
    </q-col>
    <q-col :class="{ 'col-9': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
      <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="q-mx-lg"
        :class="{
          'text-teal-3': $q.dark.isActive,
          'text-teal': !$q.dark.isActive,
        }"
        :breakpoint="0"
        inline-label
      >
        <q-tab name="overview" icon="person" label="Overview" />
        <q-tab name="connections" icon="groups" label="Connections" />
      </q-tabs>
      <q-tab-panels
        v-model="tab"
        animated
        :class="{
          'bg-grey-10 ': $q.dark.isActive,
          'bg-teal-1 ': !$q.dark.isActive,
        }"
      >
        <q-tab-panel name="overview">
          <overview />
        </q-tab-panel>
        <q-tab-panel name="security">
          <security />
        </q-tab-panel>
        <q-tab-panel name="notification">
          <notification />
        </q-tab-panel>
        <q-tab-panel name="connections">
          <connections />
        </q-tab-panel>
      </q-tab-panels>
    </q-col>
  </div>
</template>
<script>
import { ref } from "vue";
import card1 from "components/MainLayout/UserProfile/card1";
import card5 from "components/MainLayout/UserProfile/card5";
import overview from "components/MainLayout/UserProfile/overview";
import security from "components/MainLayout/UserProfile/security";
import notification from "components/MainLayout/UserProfile/notification";
import connections from "components/MainLayout/UserProfile/connections";
export default {
  components: { security, card1, card5, notification, overview, connections },
  setup() {
    return {
      tab: ref("overview"),
    };
  },
};
</script>
<style>
.my-card {
  border-radius: 20px;
  width: auto;
  margin: 5px;
}
</style>
