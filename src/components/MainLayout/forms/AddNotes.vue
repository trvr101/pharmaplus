<template>
  <q-form>
    <q-input v-model="item_name" label="Title:" :dense="dense" />
    <q-input v-model="text" type="textarea" label="Description" />
    <q-btn
      unelevated
      rounded
      color="primary"
      label="Add Notes"
      class="full-width q-ma-lg"
      outline
    />
  </q-form>
</template>
<script></script>
