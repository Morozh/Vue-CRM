<template>
  <div class="categories">
    <div class="page-title">
      <h3 class="title">Категории</h3>
    </div>
    <section>
      <div class="row">
        <div class="col s12 m6">
          <category-create @created="addNewCategory" />
        </div>

        <div class="col s12 m6">
          <category-edit />
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
    categories: []
  }),
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    }
  }
}
</script>