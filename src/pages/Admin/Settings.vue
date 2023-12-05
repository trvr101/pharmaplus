<template>
  <div class="row">
    <q-col :class="{ 'col-3': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
      <card1 />
    </q-col>
    <q-col :class="{ 'col-9': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
      <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="text-teal q-mx-lg"
        :breakpoint="0"
        inline-label
      >
        <q-tab name="overview" icon="person" label="Overview" />
        <q-tab name="security" icon="lock" label="Security" />
        <q-tab name="notification" icon="notifications" label="Notification" />
        <q-tab name="connections" icon="groups" label="Connections" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated class="bg-teal-1">
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
import card1 from "components/MainLayout/settings/card1";
import overview from "components/MainLayout/settings/overview";
import security from "components/MainLayout/settings/security";
import notification from "components/MainLayout/settings/notification";
import connections from "components/MainLayout/settings/connections";
export default {
  components: { security, card1, notification, overview, connections },
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
