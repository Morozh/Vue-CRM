<template>
  <div>
    <loader v-if="loading" />
    <div class="app-main-layout" v-else>
      <navbar 
        @click="isOpen = !isOpen"
        :class="{'sidenav-closed' : isOpen === false}"
      />

      <sidebar v-model="isOpen" />

      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <add-btn />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/App/Navbar/Navbar'
import Sidebar from '@/components/App/Sidebar/Sidebar'
import AddBtn from '@/components/UI/Buttons/AddBtn'
import Loader from '@/components/App/Loader/Loader.vue'
import messages from '@/common/messages'

export default {
  name: 'main',
  components: {
    Navbar,
    Sidebar,
    AddBtn
  },
  data: () => ({
    isOpen: true,
    loading: true
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo');
    }

    this.loading = false;
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Что-то пошло не так');
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidenav-closed {
    padding: 0 2rem !important;
    transition: all .3s ease;
  }
</style>