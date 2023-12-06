<template>
  <div>
    <div class="row" style="margin: 10px" bordered v-if="$q.screen.gt.xs">
      <div class="col-10"></div>
      <div class="col-2 text-right"></div>
    </div>
    <div class="row">
      <div :class="{ 'col-3': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }">
        <!-- Loading skeleton card -->
        <q-card
          v-if="loading"
          class="my-card"
          flat
          :bordered="!$q.dark.isActive"
        >
          <q-item>
            <q-item-section avatar>
              <q-skeleton type="QAvatar" size="85px" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>

        <!-- Actual data card -->
        <q-card
          v-else
          class="my-card"
          flat
          :bordered="!$q.dark.isActive"
          onclick=""
        >
          <q-card-section class="row">
            <div class="col-3">
              <q-avatar
                size="85px"
                font-size="52px"
                color="teal"
                text-color="white"
                ><img
                  class="absolute-center"
                  src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED"
              /></q-avatar>
            </div>
            <div class="col-9">
              <div class="col-12 text-right">
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

              <div class="q-pa-md">
                <div class="q-flex flex-center">
                  <q-item-label>Robert Joseph C. Aguba</q-item-label>
                  <q-item-label caption>
                    robertjosephaguba101@gmail.com
                  </q-item-label>
                  <q-item-label class="text-weight-medium">Staff</q-item-label>
                </div>
              </div>
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
    const dialog = ref(false);
    const position = ref("top");

    return {
      dialog,
      position,
      card: ref(false),

      open(pos) {
        position.value = pos;
        dialog.value = true;
      },
    };
  },
  data() {
    return {
      loading: true, // Set this to true initially to show the skeleton loading
      card: false, // Use this to control the visibility of the dialog
      // ... your other data properties ...
      //dialog
      itemData: {
        item_name: "",
        strength: "",
        category_id: null,
        // Add other fields as needed
      },
      categories: [],
    };
  },
  mounted() {
    // Simulate an asynchronous data fetching operation
    setTimeout(() => {
      // After data is fetched, set loading to false to show the actual content
      this.loading = false;
    }, 2000); // Simulating a 2-second delay (adjust as needed)
  },
};
</script>
<style>
.my-card {
  margin: 5px;
  border-radius: 20px;
  width: auto;
}
.my-card > * {
  height: 100%;
}
#user-dialog {
  width: 350px;
  height: 100vh;
  border-radius: 20px 0 0 20px;
}
</style>
