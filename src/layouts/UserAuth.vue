<template>
  <div
    class="fullscreen"
    style="
      background: radial-gradient(
        circle at 0% 125%,
        rgb(91, 200, 180),
        rgb(64, 145, 123)
      );
    "
  >
    <q-card
      class="absolute-center q-pa-lg"
      style="width: 100vw; max-width: 560px; height: 31dvh; border-radius: 40px"
    >
      <q-btn
        flat
        to="/"
        icon="arrow_back"
        class="absolute-top-left q-mt-lg q-ml-sm"
      ></q-btn>

      <h4 class="text-primary text-center q-pa-lg">
        <img
          style="
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(230deg)
              brightness(50%);
          "
          class="q-mt-sm colored-img absolute-center"
          :class="{
            'lg-height': $q.screen.gt.sm,
            'sm-height': $q.screen.lt.sm,
          }"
          src="/pharmapluslogo.png"
          alt="Pharma Plus Logo"
        />
      </h4>

      <div class="fixed-bottom-right">
        <q-card-section horizontal>
          <q-card-section>
            <q-btn flat @click="open('bottom', 'LoginForm')">Login</q-btn>
          </q-card-section>

          <q-separator vertical />

          <q-card-section>
            <q-btn flat @click="open('bottom', 'RegisterForm')">Register</q-btn>
          </q-card-section>
        </q-card-section>
      </div>
    </q-card>
  </div>
  <q-dialog v-model="dialog" :position="position">
    <q-card
      style="width: 100vw; height: 60dvh; border-radius: 40px 40px 0 0"
      maximized
      class="q-pa-md"
    >
      <q-tabs
        v-model="tab"
        indicator-color="teal"
        dense
        align="justify"
        switch-indicator
        slide-transition
      >
        <q-tab class="text-primary" name="LoginForm" label="Sign In" />
        <q-tab class="text-primary" name="RegisterForm" label="Sign Up" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated slide-transition>
        <q-tab-panel name="LoginForm">
          <LoginForm />
        </q-tab-panel>
        <q-tab-panel name="RegisterForm">
          <RegisterForm />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import LoginForm from "components/UserAuth/forms/LoginForm";
import RegisterForm from "components/UserAuth/forms/RegisterForm";

export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  setup() {
    const dialog = ref(false);
    const position = ref("bottom");
    const tab = ref("LoginForm"); // Initial active tab

    return {
      tab,
      dialog,
      position,

      open(pos, selectedTab) {
        position.value = pos;
        tab.value = selectedTab;
        dialog.value = true;
      },
    };
  },
};
</script>
<style>
.sm-height {
  height: 65px;
}
.lg-height {
  height: 80px;
}
</style>
