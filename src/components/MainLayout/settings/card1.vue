<template>
  <q-card flat :bordered="!$q.dark.isActive" class="my-card q-my-lg">
    <div class="fit column justify-center items-center content-center">
      <q-avatar size="170px" color="teal" text-color="white" class="q-ma-lg"
        ><img
          style="border: 5px solid rgb(47, 153, 142)"
          src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=_2puhHggeOMAX-3kbyH&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfBF056F2kETrCfpCXvxfO2-MZiE-USLNQBXklQ5qoNgJw&oe=6578236D"
      /></q-avatar>
      <div
        style="font-size: large; font-weight: 500"
        class="q-mt-md"
        :class="{
          'text-grey-3 q-pb-sm': $q.dark.isActive,
          'text-primary': !$q.dark.isActive,
        }"
      >
        Aguba, Robert Joseph C.
      </div>
      <div class="text-caption text-grey-6">name</div>
      <q-chip
        :outline="!$q.dark.isActive"
        class="q-ma-md"
        :class="{
          'bg-secondary text-grey-3': $q.dark.isActive,
          'text-teal': !$q.dark.isActive,
        }"
      >
        Admin
      </q-chip>
      <div class="row q-ma-md">
        <q-card
          flat
          style="border-radius: 20px; width: 200px"
          class="q-pr-md"
          :class="{
            'bg-secondary text-grey-3': $q.dark.isActive,
            ' bg-teal-2': !$q.dark.isActive,
          }"
        >
          <div>
            <div class="decked-text">
              <q-icon
                name="done"
                class="bg-teal text-white"
                size="lg"
                style="border-radius: 20px; height: 50px; width: 50px"
              />
              <div class="text">
                <div
                  class="text-body1"
                  :class="{
                    'text-grey-3': $q.dark.isActive,
                    ' text-grey-9': !$q.dark.isActive,
                  }"
                >
                  300
                </div>
                <div
                  class="text-caption"
                  :class="{
                    'text-grey-5': $q.dark.isActive,
                    ' text-grey-9': !$q.dark.isActive,
                  }"
                >
                  Transaction Done:
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <q-separator inset class="q-my-md" />
    <div class="text-h6 q-ma-lg text-grey-8">Details</div>
    <div
      class="q-ma-lg text-body1"
      :class="{
        'text-grey-3 q-pb-sm': $q.dark.isActive,
        'text-grey-9 ': !$q.dark.isActive,
      }"
    >
      <div class="q-my-lg">Email:</div>
      <div class="q-my-lg">Status:</div>
      <div class="q-my-lg">Role:</div>
      <div class="q-my-lg">Branch:</div>
      <div class="q-my-lg">Contact:</div>
      <div class="q-my-lg">Language:</div>
      <div class="q-my-lg">Country:</div>
    </div>
  </q-card>
</template>
<style>
.decked-text {
  display: flex;
  align-items: center;
}

.decked-text .text {
  margin-left: 10px;
}
</style>
