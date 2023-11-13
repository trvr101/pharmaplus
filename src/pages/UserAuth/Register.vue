<template>
  <div
    :class="{
      UserAuthContainer: !$q.screen.lt.sm,
      AuthUserMobile: $q.screen.lt.sm,
    }"
  >
    <q-text-body2>
      Register
      <span class="text-grey-5 UserAuthVerticalSeparator">|</span>
      <q-btn
        flat
        dense
        color="grey-7   "
        label="Sign in"
        @click="$router.push('/')"
        no-caps
      />
    </q-text-body2>

    <q-separator class="UserAuthSeparator" color="teal" />
    <div class="UserAuthinputs">
      <q-input
        color="teal"
        v-model="username"
        label="Username"
        class="UserAuthinput"
      >
        <template v-slot:prepend>
          <q-icon name="person" color="teal" />
        </template> </q-input
      ><q-input
        color="teal"
        v-model="email"
        label="Email"
        class="UserAuthinput"
      >
        <template v-slot:prepend>
          <q-icon name="alternate_email" color="teal" />
        </template>
      </q-input>
      <q-input
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
        hint="Password with toggle"
        color="teal"
        label="Password"
        class="UserAuthinput"
      >
        <template v-slot:prepend> <q-icon name="lock" color="teal" /> </template
        ><template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-input v-model="date" mask="date" :rules="['date']" label="Birthdate">
        <template v-slot:prepend>
          <q-icon name="event" class="cursor-pointer" color="teal">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date" minimal>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="teal" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-btn
        color="teal"
        class="full-width"
        label="Sign up"
        to="dashboard"
        icon="login"
        no-caps
        unelevated
      />

      <div style="display: flex; align-items: center; margin-bottom: 10px">
        <q-separator style="flex: 1"></q-separator>
        <div class="text-grey-7" style="margin: 0 10px">Sign in With</div>
        <q-separator style="flex: 1"></q-separator>
        <q-btn outline round color="teal" icon="lab la-facebook-f">
          <q-tooltip transition-show="scale" transition-hide="scale">
            Facebook
          </q-tooltip>
        </q-btn>
        <q-separator style="flex: 1"></q-separator>
        <q-btn outline round color="teal" icon="lab la-google">
          <q-tooltip transition-show="scale" transition-hide="scale">
            Google
          </q-tooltip></q-btn
        >
        <q-separator style="flex: 1"></q-separator>
        <q-btn outline round color="teal" icon="lab la-microsoft">
          <q-tooltip transition-show="scale" transition-hide="scale">
            Microsoft
          </q-tooltip></q-btn
        >
      </div>

      <!--
      <q-btn
        outline
        no-caps
        color="teal"
        label="Google"
        
        class="full-width"
      /> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),

      username: ref(""),
      email: ref(""),
      date: ref(""),
    };
  },
};
</script>
<style>
.UserAuthContainer {
  padding: 3rem;
}
.AuthUserMobile {
  padding: 3rem 1.5rem 0 1.5rem;
}
.UserAuthinputs {
  padding: 1rem;
}
.UserAuthinputs > * {
  margin: 15px 0 15px 0;
}
.UserAuthinput {
  border-radius: 20px;
}
.UserAuthSeparator {
  width: 1rem;
  margin-top: 0.5rem;
}
.UserAuthVerticalSeparator {
  margin: 0.5rem;
}
</style>
