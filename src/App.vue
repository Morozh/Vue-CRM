<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Main from '@/layouts/Main'
import Auth from '@/layouts/Auth'

export default {
  components: {
    Main,
    Auth
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'Auth'
    }
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/css/index.css';
@import 'assets/fonts/roboto.css';

#app {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  color: #000;
}

a {
  font-family: 'Roboto Medium', sans-serif !important;
  font-size: 16px !important;
  font-style: normal;
}

h2, h3, h4, button {
  font-family: 'Roboto Medium', sans-serif;
  font-weight: 500;
}

</style>
