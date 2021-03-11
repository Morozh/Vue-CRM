<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen = !isOpen" />

    <Sidebar v-model="isOpen" />

    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <AddBtn />
  </div>
</template>

<script>
import Navbar from '@/components/App/Navbar'
import Sidebar from '@/components/App/Sidebar'
import AddBtn from '@/components/App/UI/AddBtn'

export default {
  name: 'main',
  components: {
    Navbar,
    Sidebar,
    AddBtn
  },
  data: () => ({
    isOpen: true,
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo');
    }
  }
}
</script>
