<template>
  <q-card class="my-card my-card-inventory" flat :bordered="!$q.dark.isActive">
    <div class="q-pa-lg">
      <q-select
        label="Select multiple values"
        hint=""
        v-model="model"
        color="teal"
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
