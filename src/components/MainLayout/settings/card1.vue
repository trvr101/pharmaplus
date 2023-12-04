<template>
  <q-card flat bordered class="my-card bg-grey-1 q-my-lg">
    <div class="fit column justify-center items-center content-center">
      <q-avatar size="150px" color="teal" text-color="white" class="q-ma-lg"
        ><img
          style="border: 5px solid rgb(47, 153, 142)"
          src="https://img-9gag-fun.9cache.com/photo/aD4L5PN_460swp.webp"
      /></q-avatar>
      <div
        style="font-size: large; font-weight: 500"
        class="text-primary q-mt-md"
      >
        Aguba, Robert Joseph C.
      </div>
      <div class="text-caption text-grey-6">name</div>
      <q-chip outline color="teal" class="bg-teal-1 q-ma-md"> ADMIN </q-chip>
      <div class="row q-ma-md">
        <q-card
          flat
          style="border-radius: 20px; width: 200px"
          class="q-pr-md bg-teal-2"
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
                <div class="text-body1">300</div>
                <div class="text-caption">Transaction Done:</div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <div class="text-h6 q-ma-lg text-grey-8">Details</div>
    <q-separator inset class="q-my-md" />
    <div class="q-ma-lg">
      <div class="text-body1 text-grey-8 q-my-lg">Email:</div>
      <div class="text-body1 text-grey-8 q-my-lg">Status:</div>
      <div class="text-body1 text-grey-8 q-my-lg">Role:</div>
      <div class="text-body1 text-grey-8 q-my-lg">Branch:</div>
      <div class="text-body1 text-grey-8 q-my-lg">Contact:</div>
      <div class="text-body1 text-grey-8 q-my-lg">Language:</div>
      <div class="text-body1 text-grey-8 q-my-lg">Country:</div>
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
