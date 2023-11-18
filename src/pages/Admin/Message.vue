<template>
  <div class="row">
    <q-list
      class="rounded-borders"
      :class="{ 'col-3': $q.screen.gt.sm, 'col-12': $q.screen.lt.sm }"
    >
      <q-item-label header>Messages</q-item-label>
      <!-- Loading skeleton item -->
      <q-item v-if="loading">
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" width="65%" />
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- Actual content item -->
      <q-item v-else clickable v-ripple to="/convo">
        <q-item-section avatar>
          <q-avatar>
            <img
              src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=yV64cxz9egsAX_PMAoi&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfA6HW59IScCT-kltsIT6MwPGDHC6aHzLNs5_g78M5-SBA&oe=655C73ED"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Brunch this weekend?</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Robert</span>
            -- I'll be in your neighborhood doing errands this weekend. Do you
            want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section side top> 1 min ago </q-item-section>
      </q-item>

      <q-separator inset="item" />
    </q-list>
    <div class="col-8"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true, // Set this to true initially to show the skeleton loading
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
#message_list {
  height: 100vh; /* Set the desired height for the scrollable container */
  overflow-y: auto; /* Enable vertical scrolling */
  border: 1px solid #ccc; /* Optional: Add a border for visualization */
}
</style>
