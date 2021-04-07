<template>
  <div class="home">
    <div class="page-title">
      <h3 class="title">Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <loader v-if="loading" />

    <div 
      class="row"
      v-else
    >
      <home-bill 
        :rates="currency.rates"
      />

      <home-currency
        :rates="currency.rates"
        :date="currency.date"
      />
    </div>
  </div>
</template>

<script>
import HomeBill from '@/components/App/Cards/HomeBill'
import HomeCurrency from '@/components/App/Cards/HomeCurrency'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Счет'
  },
  components: {
    HomeBill,
    HomeCurrency
  },
  data: () => ({
    loading: true,
    currency: null
  }),
  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency');
    
    this.loading = false;
  },
  methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.$store.dispatch('fetchCurrency');
      this.loading = false;
    }
  }
}
</script>
