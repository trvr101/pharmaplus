<template>
  <div>
    <div class="row" style="margin: 10px" bordered v-if="$q.screen.gt.xs">
      <div class="col-10"></div>
      <div class="col-2 text-right">
        <q-btn
          bordered
          label="Add User"
          color="primary"
          @click="persistent = true"
        />

        <q-dialog
          v-model="persistent"
          persistent
          transition-show="scale"
          transition-hide="scale"
        >
          <q-card class="bg-teal text-white" style="width: 300px">
            <q-card-section>
              <div class="text-h6">Persistent</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Click/Tap on the backdrop.
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-teal">
              <q-btn flat label="OK" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
    <div class="row">
      <div :class="{ 'col-3': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
        <q-card class="my-card" flat bordered>
          <q-card-section class="row">
            <div class="col-4">
              <q-avatar
                size="100px"
                font-size="52px"
                color="teal"
                text-color="white"
                ><img
                  src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED"
              /></q-avatar>
            </div>
            <div class="col-8">
              <div class="col-12 text-right">
                <q-icon name="more_vert" @click="card = true"></q-icon>

                <q-dialog
                  v-model="card"
                  transition-show="slide-up"
                  transition-hide="fade"
                >
                  <q-card class="my-card">
                    <q-img
                      src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED"
                    />

                    <q-card-section>
                      <q-btn
                        fab
                        color="primary"
                        icon="place"
                        class="absolute"
                        style="top: 0; right: 12px; transform: translateY(-50%)"
                      />

                      <div class="row no-wrap items-center">
                        <div class="col text-h6 ellipsis">Cafe Basilico</div>
                        <div
                          class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                        >
                          <q-icon name="place" />
                          250 ft
                        </div>
                      </div>

                      <q-rating v-model="stars" :max="5" size="32px" />
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="text-subtitle1">$・Italian, Cafe</div>
                      <div class="text-caption text-grey">
                        Small plates, salads & sandwiches in an intimate
                        setting.
                      </div>
                    </q-card-section>

                    <q-separator />

                    <q-card-actions align="right">
                      <q-btn
                        v-close-popup
                        flat
                        color="primary"
                        label="Reserve"
                      />
                      <q-btn
                        v-close-popup
                        flat
                        color="primary"
                        round
                        icon="event"
                      />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </div>
              <q-item-label>Robert Joseph C. Aguba</q-item-label>
              <q-item-label caption>
                robertjosephaguba101@gmail.com
              </q-item-label>
              <q-item-label class="text-weight-medium">Staff</q-item-label>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div :class="{ 'col-3': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
        <q-card class="my-card" flat bordered>
          <q-card-section class="row">
            <div class="col-4">
              <q-avatar
                size="100px"
                font-size="52px"
                color="teal"
                text-color="white"
                ><img
                  src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=jYB7aOZ9-F4AX_EyMTU&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfAgZaVS7K7vyfT2S2l7LP92FqbqXubO7K98aVRoU21B_A&oe=654AA7AD"
              /></q-avatar>
            </div>
            <div class="col-8">
              <div class="col-12 text-right">
                <q-icon name="more_vert"></q-icon>
              </div>
              <q-item-label>Robert Joseph C. Aguba</q-item-label>
              <q-item-label caption>
                robertjosephaguba101@gmail.com
              </q-item-label>
              <q-item-label class="text-weight-medium">Staff</q-item-label>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div :class="{ 'col-3': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
        <q-card class="my-card" flat bordered>
          <q-card-section class="row">
            <div class="col-4">
              <q-avatar
                size="100px"
                font-size="52px"
                color="teal"
                text-color="white"
                ><img
                  src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=jYB7aOZ9-F4AX_EyMTU&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfAgZaVS7K7vyfT2S2l7LP92FqbqXubO7K98aVRoU21B_A&oe=654AA7AD"
              /></q-avatar>
            </div>
            <div class="col-8">
              <div class="col-12 text-right">
                <q-icon name="more_vert"></q-icon>
              </div>
              <q-item-label>Robert Joseph C. Aguba</q-item-label>
              <q-item-label caption>
                robertjosephaguba101@gmail.com
              </q-item-label>
              <q-item-label class="text-weight-medium">Staff</q-item-label>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div :class="{ 'col-3': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
        <q-card class="my-card" flat bordered>
          <q-card-section class="row">
            <div class="col-4">
              <q-avatar
                size="100px"
                font-size="52px"
                color="teal"
                text-color="white"
                ><img
                  src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=jYB7aOZ9-F4AX_EyMTU&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfAgZaVS7K7vyfT2S2l7LP92FqbqXubO7K98aVRoU21B_A&oe=654AA7AD"
              /></q-avatar>
            </div>
            <div class="col-8">
              <div class="col-12 text-right">
                <q-icon name="more_vert" @click="console.log(hello)"></q-icon>
              </div>
              <q-item-label>Robert Joseph C. Aguba</q-item-label>
              <q-item-label caption>
                robertjosephaguba101@gmail.com
              </q-item-label>
              <q-item-label class="text-weight-medium">Staff</q-item-label>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      carousel: ref(false),
      card: ref(false),
      sliders: ref(false),
      persistent: ref(false),

      slide: ref(1),
      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",

      stars: ref(3),

      slideVol: ref(39),
      slideAlarm: ref(56),
      slideVibration: ref(63),
    };
  },
};
</script>
<style>
.my-card {
  margin: 10px;
  border-radius: 20px;
  width: auto;
}
</style>
