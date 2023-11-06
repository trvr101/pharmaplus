<template>
  <q-layout view="hHh lpR fff" class="UserAuthLayout">
    <div class="UserAuthBackground">
      <!-- Add your low-opacity photo here -->
    </div>
    <div class="UserAuthCenter bg-teal-1">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<style>
.UserAuthLayout {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100vh;
  background: linear-gradient(90deg, #007261, #007976, rgba(0, 114, 127, 1));
}

.UserAuthBackground {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(" https://images.pexels.com/photos/3850688/pexels-photo-3850688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  opacity: 0.2; /* Adjust the opacity as needed */
  z-index: 0;
}

.UserAuthCenter {
  height: 90%;
  width: 700px;
  border-radius: 45px 0 0 45px;
  z-index: 1;
}
</style>
