<template>
  <div
    class="fullscreen text-white text-center q-pa-md flex flex-center"
    id="page404"
  >
    <div>
      <h1 style="">404</h1>
      <h5>Sorry, The page you are looking for was not found</h5>
      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="teal"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
<style>
#page404 {
  background: linear-gradient(90deg, #007261, #007976, rgba(0, 114, 127, 1));
}
</style>
