<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 350px">
      <q-option-group
        v-model="panel"
        inline
        color="teal"
        :options="[
          { label: 'Account', value: 'account' },
          { label: 'Privacy', value: 'privacy' },
          { label: 'Notification', value: 'notification' },
        ]"
      />
      <q-card bordered flat>
        <q-tab-panels v-model="panel" animated>
          <q-tab-panel name="account">
            <div class="text-h6">Account</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="privacy">
            <div class="text-h6">Privacy</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="notification">
            <div class="text-h6">Notification</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      panel: ref("account"),
    };
  },
};
</script>
