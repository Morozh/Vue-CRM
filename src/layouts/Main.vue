<template>
  <div>
    <loader v-if="loading" />
    <div class="app-main-layout" v-else>
      <navbar @click="isOpen = !isOpen" />

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
import Navbar from '@/components/App/Navbar'
import Sidebar from '@/components/App/Sidebar'
import AddBtn from '@/components/App/UI/Buttons/AddBtn'
import Loader from '../components/App/Loader.vue'

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
  }
}
</script>
