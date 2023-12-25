<template>
  <q-layout
    view="lHh Lpr lFf"
    container
    style="height: 100vh"
    class="text-dark MainLayout"
    :class="{ 'text-teal-2 bg-grey-10 ': $q.dark.isActive }"
  >
    <div></div>
    <DrawerHeader />
    <q-page-container v-if="userProfileFetched">
      <router-view
        :class="{
          'q-ma-sm q-mt-md': $q.screen.gt.sm,
          'no-margin no-padding': $q.screen.lt.sm,
        }"
      />
    </q-page-container>
    <Footer />
    <FabDialog />
  </q-layout>
</template>

<script>
import DrawerHeader from "components/MainLayout/DrawerHeader";
import Footer from "components/MainLayout/Footer";
import FabDialog from "components/MainLayout/FabDialog";
import { useQuasar } from "quasar";

export default {
  components: {
    DrawerHeader,
    Footer,
    FabDialog,
  },
  setup() {
    // equivalent to calling this on creating the component
    const $q = useQuasar();
    $q.addressbarColor.set("cyan-9");
  },
  data() {
    return {
      userProfileFetched: false,
    };
  },
  created() {
    const token = sessionStorage.getItem("token");

    if (token) {
      // If a token is available, call the fetchUserProfile action
      this.$store
        .dispatch("fetchUserProfile", token)
        .then(() => {
          // Set a flag when the user profile has been fetched
          this.userProfileFetched = true;
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    } else {
      // Handle the case where there's no token
      console.error("Token not available. Unable to fetch user profile.");
    }
  },
  computed: {
    getUserId() {
      return this.userProfileFetched
        ? this.$store.state.userProfile?.user_id
        : null;
    },
    getBranchId() {
      return this.userProfileFetched
        ? this.$store.state.userProfile?.branch_id
        : null;
    },
  },
};
</script>

<style lang="css">
.MainLayout {
  background: #f1feff;
  /* background: linear-gradient(90deg, #007261, #007976, rgba(0, 114, 127, 1)); */
}
#dialogitem {
  border-radius: 15px;
}
</style>
