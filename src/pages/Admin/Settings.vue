<template>
  <div class="row">
    <q-col class="col-4">
      <q-card flat bordered class="my-card q-pa-md bg-grey-1">
        <q-avatar size="150px" color="teal" class="my-img q-ma-lg"
          ><img src="https://img-9gag-fun.9cache.com/photo/aD4L5PN_460swp.webp"
        /></q-avatar>
        <h6 style="margin: auto; font-weight: 400">AGUBA, ROBERT JOSEPH C.</h6>
      </q-card>
    </q-col>
    <q-col class="col-8">
      <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="text-teal"
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
          <q-card flat bordered class="my-card">overview</q-card>
        </q-tab-panel>

        <q-tab-panel name="security">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="notification">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
        <q-tab-panel name="connections">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-col>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
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
