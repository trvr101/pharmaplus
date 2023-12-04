<template>
  <div class="row">
    <q-col class="col-3">
      <q-card flat bordered class="my-card bg-grey-1">
        <div class="fit column justify-center items-center content-center">
          <q-avatar size="150px" color="teal" text-color="white" class="q-ma-md"
            ><img
              src="https://img-9gag-fun.9cache.com/photo/aD4L5PN_460swp.webp"
          /></q-avatar>
          <div
            style="font-size: large; font-weight: 500"
            class="text-primary q-ma-sm"
          >
            Aguba, Robert Joseph C.
          </div>
          <q-chip outline color="teal" class="bg-teal-1 q-ma-sm">
            ADMIN
          </q-chip>
          <div class="row q-ma-sm">
            <q-card flat style="border-radius: 20px" class="q-pr-md bg-teal-2">
              <div class="col-5">
                <q-icon
                  name="done"
                  class="bg-teal text-white"
                  size="lg"
                  style="border-radius: 20px"
                />Transaction Done: 300
              </div>
            </q-card>
          </div>
        </div>
        <div class="text-h6 q-ma-lg text-grey-8">Details</div>
        <q-separator inset class="q-my-sm" />
        <div class="q-ma-lg">
          <div class="text-body1 text-grey-8 q-my-md" style="font-weight: 600">
            Email:
          </div>
          <div class="text-body1 text-grey-8 q-my-md" style="font-weight: 600">
            Status:
          </div>
          <div class="text-body1 text-grey-8 q-my-md" style="font-weight: 600">
            Role:
          </div>
          <div class="text-body1 text-grey-8 q-my-md" style="font-weight: 600">
            Contact:
          </div>
          <div class="text-body1 text-grey-8 q-my-md" style="font-weight: 600">
            Language:
          </div>
          <div class="text-body1 text-grey-8 q-my-md" style="font-weight: 600">
            Country:
          </div>
        </div>
      </q-card>
    </q-col>
    <q-col class="col-9">
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
