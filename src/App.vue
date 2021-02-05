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
</style>
