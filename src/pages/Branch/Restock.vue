<template>
  <div class="row q-mx-sm q-mt-md">
    <q-card
      flat
      :bordered="!$q.dark.isActive"
      class="my-card q-mb-sm q-mr-sm"
      :class="{
        col: $q.screen.gt.sm,
        'col-12  no-margin no-padding ': $q.screen.lt.sm,
      }"
    >
      <q-form @submit.prevent="addQuantity" class="q-pa-lg">
        <div
          class="text-h6 row q-ma-lg"
          :class="{
            'q-pb-none ': $q.screen.lt.sm,
          }"
        >
          Restock
        </div>
        <div
          class="row"
          :class="{
            'q-mx-lg': $q.screen.lt.sm,
          }"
        >
          <q-input
            required
            v-model="quantity"
            label="Quantity to Restock"
            type="number"
            class="q-ma-lg col"
            :class="{
              col: $q.screen.gt.sm,
              'col-12  q-mx-lg  no-margin  ': $q.screen.lt.sm,
            }"
          />

          <q-input
            v-model="date"
            mask="date"
            label="Expiration Date"
            class="q-ma-lg col"
            :class="{
              col: $q.screen.gt.sm,
              'col-12  q-mx-lg  no-margin  ': $q.screen.lt.sm,
            }"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date" minimal="">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="q-mx-md">
          <q-btn
            rounded
            class="q-ma-lg full-width"
            flat
            outline
            icon="send"
            type="submit"
            :class="{
              'text-teal-3 bg-secondary ': $q.dark.isActive,
              'bg-teal text-grey-3': !$q.dark.isActive,
            }"
          />
        </div>
      </q-form>
    </q-card>
    <q-card
      flat
      :bordered="!$q.dark.isActive"
      class="my-card q-mb-sm"
      :class="{
        col: $q.screen.gt.sm,
        'col-12  no-margin no-padding ': $q.screen.lt.sm,
      }"
    ></q-card>
  </div>
  <audit class="q-mx-sm q-mb-sm" />
</template>

<script>
import { api } from "src/boot/axios";
import { Notify } from "quasar";
import audit from "pages/Branch/ProductAudit.vue";

export default {
  components: { audit },
  data() {
    return {
      quantity: null,
      date: null,
    };
  },
  methods: {
    async addQuantity() {
      // Validate quantity to ensure it is not negative
      if (this.quantity < 0) {
        Notify.create({
          type: "negative",
          message: "Quantity cannot be negative",
        });
        return;
      }

      const token = this.$route.params.token;
      const product_id = this.$route.params.product_id;

      try {
        const response = await api.post(`/AddQuantity/${token}/${product_id}`, {
          quantity: this.quantity,
          date: this.date,
        });

        // Handle response as needed
        // Example: Notify.create({ type: 'positive', message: 'Quantity added successfully' });

        // Reset form fields after successful submission
        this.quantity = null;
        this.date = null;
      } catch (error) {
        // Handle error
        Notify.create({
          type: "negative",
          message: "Error adding quantity",
        });
      }
    },
  },
};
</script>

<style>
.my-card {
  border-radius: 25px;
}
</style>
