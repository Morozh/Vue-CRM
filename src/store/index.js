import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './auth'
import Info from './info'
import Category from './category'
import Record from './record'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXERIO;
      const result = await fetch(`https://api.currencyfreaks.com/latest?apikey=${key}&currency-symbols=USD,RUB,EUR`);
      
      return await result.json();
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    Auth,
    Info,
    Category,
    Record
  }
})
