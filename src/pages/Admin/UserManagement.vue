<template>
  <div>
    <div class="row" style="margin: 10px" bordered v-if="$q.screen.gt.xs">
      <div class="col-10"></div>
      <div class="col-2 text-right">
        <q-btn outline rounded color="primary" label="Confirm User" />
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
<script></script>
<style>
.my-card {
  margin: 10px;
  border-radius: 20px;
  width: auto;
}
</style>
