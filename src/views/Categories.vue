<template>
  <div class="categories">
    <div class="page-title">
      <h3 class="title">Категории</h3>
    </div>
    <section>
      <loader v-if="loading" />
      <div class="row" v-else>
        <div class="col s12 m6">
          <category-create @created="addNewCategory" />
        </div>

        <div class="col s12 m6">
          <category-edit
            v-if="categories.length"
            :categories="categories"
            :key="categories.length + updateCount"
            @updated="updateCategories"
          />

          <p v-else class="center">Категории отсутствуют</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '@/components/App/Category/CategoryCreate'
import CategoryEdit from '@/components/App/Category/CategoryEdit'

export default {
  name: 'Categories',
  components: {
    CategoryCreate,
    CategoryEdit
  },
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0
  }),
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    },
    updateCategories(category) {
      const idx = this.categories.findIndex(c => c.id === category.id);
      this.categories[idx].title = category.title;
      this.categories[idx].limit = category.limit;
      this.updateCount++;
    }
  },
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
    this.loading = false;
  }
}
</script>