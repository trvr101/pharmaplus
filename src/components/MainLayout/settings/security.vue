<template>
  <div>
    <q-card
      flat
      :bordered="!$q.dark.isActive"
      class="my-card full-width"
      style="overflow: hidden"
    >
      <div class="q-pa-lg">
        <h5 class="q-ma-lg">Change Password</h5>
        <div class="q-ma-lg">
          <q-card
            flat
            class="my-card full-width q-pa-lg bg-teal-2"
            style="overflow: hidden"
            ><strong> Ensure that these requirements are met</strong><br />
            Minimum 8 characters long, uppercase & symbol</q-card
          >
        </div>
        <q-form>
          <div class="row q-ma-lg">
            <q-input
              class="col"
              filled
              v-model="NewPassword"
              label="New Password"
              label-color="teal"
              :dense="dense"
              type="password"
            />
            <q-input
              class="col q-ml-lg"
              filled
              v-model="text"
              label="Confirm Password"
              label-color="teal"
              :dense="dense"
              type="password"
            />
          </div>
          <q-btn
            unelevated
            rounded
            label="Change Password"
            class="q-ma-lg q-px-lg float-right"
            :class="{
              'text-teal-3 bg-secondary ': $q.dark.isActive,
              'bg-teal text-grey-3': !$q.dark.isActive,
            }"
            type="submit"
            @click=""
          />
        </q-form>
      </div>
      <q-linear-progress :value="1" color="teal-3" :max="100" />
    </q-card>
  </div>
</template>
