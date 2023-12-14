<template>
  <q-card flat :bordered="!$q.dark.isActive" class="my-card q-my-lg">
    <div class="fit column justify-center items-center content-center">
      <q-avatar size="170px" color="teal" text-color="white" class="q-ma-lg">
        {{ getInitials(userProfile.first_name, userProfile.last_name) }}
      </q-avatar>
      <div
        style="font-size: large; font-weight: 500"
        class="q-mt-md"
        :class="{
          'text-grey-3 q-pb-sm': $q.dark.isActive,
          'text-primary': !$q.dark.isActive,
        }"
      >
        {{ userProfile.first_name }} {{ userProfile.last_name }}
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
      <div class="q-my-lg">Email: {{ userProfile.email }}</div>
      <div class="q-my-lg">Status: {{ userProfile.status }}</div>
      <div class="q-my-lg">Role: {{ userProfile.user_role }}</div>
      <div class="q-my-lg">Branch: {{ userProfile.branch_id }}</div>
      <div class="q-my-lg">Contact: {{ userProfile.phone }}</div>
      <div class="q-my-lg">Language: {{ userProfile.user_lang }}</div>
      <div class="q-my-lg">Country: {{ userProfile.user_country }}</div>
      <div class="text-center">
        <q-btn
          label="edit"
          flat
          @click="openDrawer"
          rounded
          icon="edit"
          :class="{
            'text-teal-3 bg-secondary ': $q.dark.isActive,
            'bg-teal text-grey-3': !$q.dark.isActive,
          }"
        />
      </div>
    </div>
  </q-card>
  <q-dialog v-model="dialog" :position="position">
    <q-card
      style="width: 100vw; height: 60dvh; border-radius: 40px"
      maximized
      class="q-pa-md"
    >
      <q-form class="fullwidth">
        <div class="text-center h6">Edit Profile</div>
        <div class="row q-ma-lg">
          <q-input
            class="col"
            filled
            :value="editedUserProfile.first_name"
            @input="updateFirstName"
            label="First Name"
            label-color="teal"
            :dense="dense"
          />
          <q-input
            class="col q-ml-lg"
            filled
            :value="editedUserProfile.last_name"
            @input="updateLastName"
            label="Last Name"
            label-color="teal"
            :dense="dense"
          />
        </div>
        <div class="q-px-lg q-pb-lg">
          <q-input
            class="full-width"
            filled
            :value="editedUserProfile.email"
            @input="updateEmail"
            label="Email"
            label-color="teal"
            :dense="dense"
          />
          <q-input
            class="full-width q-mt-lg"
            filled
            :value="editedUserProfile.phone"
            @input="updatePhone"
            label="Contact"
            label-color="teal"
            :dense="dense"
          />
          <div class="row q-mt-lg">
            <q-input
              class="col"
              filled
              :value="editedUserProfile.user_lang"
              @input="updateUserLang"
              label="Language"
              label-color="teal"
              :dense="dense"
            />
            <q-input
              class="col q-ml-lg"
              filled
              :value="editedUserProfile.user_country"
              @input="updateUserCountry"
              label="Country"
              label-color="teal"
              :dense="dense"
            />
          </div>
          <q-btn
            class="full-width q-my-lg bg-teal text-grey-3"
            label="Save"
            icon="send"
            flat
            rounded
            @click="saveChanges"
          />
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref } from "vue";
import { api } from "src/boot/axios";

export default {
  setup() {
    const dialog = ref(false);
    const position = ref("bottom");
    const editedUserProfile = ref({
      first_name: "",
      last_name: "",
    });
    const updateFirstName = (value) => {
      editedUserProfile.value.first_name = value;
    };

    const updateLastName = (value) => {
      editedUserProfile.value.last_name = value;
    };

    const open = (pos) => {
      position.value = pos;
      dialog.value = true;
    };

    const openDrawer = () => {
      open("bottom");
    };

    const close = () => {
      dialog.value = false;
    };
    const saveChanges = async () => {
      try {
        const token = sessionStorage.getItem("token");
        await api.put(`/profile/${token}`, editedUserProfile.value);
        this.fetchUserProfile(); // Refresh the userProfile after the update
        close(); // Close the dialog
      } catch (error) {
        console.error("Error updating user profile:", error);
        // Handle error, e.g., show a message to the user
      }
    };

    return {
      dialog,
      position,
      editedUserProfile,
      openDrawer,
      saveChanges,
      updateFirstName,
      updateLastName,
    };
  },
  data() {
    return {
      userProfile: {},
    };
  },
  created() {
    this.fetchUserProfile(); // Initial fetch

    // Polling every 5 seconds (adjust as needed)
    this.pollingInterval = setInterval(() => {
      this.fetchUserProfile();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.pollingInterval); // Clear the interval to stop polling
  },
  methods: {
    async fetchUserProfile() {
      try {
        const token = sessionStorage.getItem("token");
        const response = await api.get(`/profile/${token}`);
        this.userProfile = response.data.user;
        // Set editedUserProfile to the fetched user profile initially
        this.editedUserProfile = { ...this.userProfile };
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // Handle error, e.g., show a message to the user
      }
    },
    getInitials(firstName, lastName) {
      const firstInitial = firstName ? firstName.charAt(0) : "";
      const lastInitial = lastName ? lastName.charAt(0) : "";
      return `${firstInitial}${lastInitial}`.toUpperCase();
    },
  },
};
</script>
<style>
.decked-text {
  display: flex;
  align-items: center;
}

.decked-text .text {
  margin-left: 10px;
}
</style>
