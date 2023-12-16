<template>
  <q-card class="my-card my-card-inventory" flat :bordered="!$q.dark.isActive">
    <div class="q-pa-lg">
      <q-select
        label="Select multiple values"
        color="teal"
        hint=""
        v-model="model"
        use-input
        use-chips
        multiple
        input-debounce="0"
        @new-value="createValue"
        :options="filterOptions"
        @filter="filterFn"
        style="width: 250px"
        class="full-width"
      />
    </div>
  </q-card>
</template>

<script>
export default {};
</script>
