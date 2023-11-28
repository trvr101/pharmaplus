<template>
  <q-date
    v-model="days"
    minimal
    flat
    bordered
    range
    multiple
    today-btn
    class="q-pa-none"
  >
    <!-- caurosel of the scedule  -->
    <q-timeline color="primary">
      <q-timeline-entry>
        <template v-slot:title> Event Title </template>
        <template v-slot:subtitle> February 22, 1986 </template>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </div>
      </q-timeline-entry>

      <q-timeline-entry icon="delete">
        <template v-slot:title> Event Title </template>
        <template v-slot:subtitle> February 21, 1986 </template>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </div>
      </q-timeline-entry>

      <q-timeline-entry avatar="https://cdn.quasar.dev/img/avatar5.jpg">
        <template v-slot:title> Event Title </template>
        <template v-slot:subtitle> February 22, 1986 </template>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </div>
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title> Event Title </template>
        <template v-slot:subtitle> February 22, 1986 </template>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </div>
      </q-timeline-entry>

      <q-timeline-entry color="orange" icon="done_all">
        <template v-slot:title> Event Title </template>
        <template v-slot:subtitle> February 22, 1986 </template>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </div>
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title> Event Title </template>
        <template v-slot:subtitle> February 22, 1986 </template>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </div>
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title> Event Title </template>
        <template v-slot:subtitle> February 22, 1986 </template>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-date>
</template>
<script>
import { ref } from "vue";
import { api } from "src/boot/axios";

export default {
  setup() {
    return {
      days: ref([{ from: "2023/11/01", to: "2023/11/10" }]), //matke this a dynamic data of calendar { from: "start_time", to: "end_time" } make
      slide: ref("style"),
    };
  },
};
</script>
