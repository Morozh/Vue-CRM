<template>
  <div class="col s12 m6 l4">
    <div class="card bill-card purple darken-1 ">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p 
          class="currency-line"
          v-for="cur of currencies"
          :key="cur"
        >
          <span>
            {{ getCurrency(cur) | currency(cur) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rates: {
      type: Object,
      required: false
    }
  },
  data: () => ({
    currencies: ['RUB', 'USD', 'JPY']
  }),
  computed: {
    base() {
      return this.$store.getters.info.bill / (this.rates['RUB']);
    }
  },
  methods: {
    getCurrency(currency) {
      return Math.floor(this.base * this.rates[currency]);
    }
  }
}
</script>
