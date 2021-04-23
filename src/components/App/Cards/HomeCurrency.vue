<template>
  <div class="col s12 m6 l8">
    <div class="card bill-card orange lighten-1">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">Курс валют</span>
        </div>
        <table>
          <thead>
          <tr>
            <th>Валюта</th>
            <th>Курс</th>
            <th>Дата</th>
          </tr>
          </thead>

          <tbody>
          <tr
            v-for="cur in currencies"
            :key="cur"
          >
            <td>{{cur}}</td>
            <td>{{rates[cur]}}</td>
            <td>{{date | date('date')}}</td>
          </tr>
          </tbody>
        </table>
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
    },
    date: {
      type: String,
      required: false
    }
  },
  data: () => ({
    currencies: ['RUB', 'USD', 'EUR']
  })
}
</script>

<style lang="scss" scoped>
.card-title {
  font-family: 'Roboto Medium', sans-serif;
  font-weight: 500;
}
</style>
