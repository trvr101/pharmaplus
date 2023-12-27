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
          >
            <strong>Ensure that these requirements are met</strong><br />
            Minimum 8 characters long, uppercase & symbol
          </q-card>
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
            @click="open('bottom')"
          />
          <q-dialog v-model="confirm" :position="position">
            <q-card
              style="width: 100vw; height: 45dvh; border-radius: 40px 40px 0 0"
              maximized
              class="q-pa-md"
            >
              <div class="text-center text-h6 q-ma-md">
                Admin Identity Verification
              </div>
              <div class="q-ma-md">
                <q-card
                  flat
                  class="my-card full-width q-pa-lg bg-teal-2 q-ma-lg"
                >
                  <p class="">
                    To ensure the security of admin operations, please verify
                    your identity before changing the password. This step is
                    crucial in preventing unauthorized access and maintaining
                    the integrity of the admin account.
                  </p>
                </q-card>
              </div>
              <q-input
                v-model="text"
                type="password"
                label="Current Password"
                color="teal"
                outlined
                class="q-ma-md"
              >
                <template v-slot:append>
                  <q-icon
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <div class="text-right">
                <q-btn rounded outline class="text-teal q-mb-md">Back</q-btn>
                <q-btn rounded flat class="bg-teal text-grey-3 q-mx-md q-mb-md"
                  >Confirm <q-icon name="check" size="xs"
                /></q-btn>
              </div>
            </q-card>
          </q-dialog>
        </q-form>
      </div>
      <q-linear-progress :value="1" color="teal-3" :max="100" />
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const position = ref("bottom");
    const confirm = ref(false);

    const open = () => {
      confirm.value = true;
    };

    const close = () => {
      confirm.value = false;
    };

    return {
      confirm,
      position,
      open,
      close,
    };
  },
};
</script>
