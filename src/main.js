import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/common/message.plugin'
import Loader from '@/components/App/Loader/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

// Init Firebase back-end
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyBmJAMNKM5DkEeCtwOKhWVaHk2MBxAvZ5M",
  authDomain: "vue-crm-galago.firebaseapp.com",
  projectId: "vue-crm-galago",
  storageBucket: "vue-crm-galago.appspot.com",
  messagingSenderId: "953019529516",
  appId: "1:953019529516:web:8ed9c8799ca9d0d58a5489",
  measurementId: "G-TVV77RXEYX"
});

let app;

// Initialize Vue project if the user exists
firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')  
  }
});
