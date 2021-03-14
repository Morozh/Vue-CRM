<template>
  <div class="category-edit">
    <div class="page-subtitle">
      <h4>Редактировать</h4>
    </div>

    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <select 
          v-model="current"
          ref="select"
        >
          <option
            v-for="c of categories"
            :key="c.id"
            :value="c.id"
          >{{c.title}}</option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <div class="input-field">
        <input 
          v-model="title"
          type="text" 
          id="name"
          class="inp"
          :class="{invalid: $v.title.$dirty && !$v.title.required}"
        >
        <label for="name">Название</label>
        <span 
          class="helper-text invalid"
          v-if="$v.title.$dirty && !$v.title.required"
        >Введите корректное название</span>
      </div>

      <div class="input-field">
        <input
          v-model.number="limit"
          id="limit"
          type="number"
          class="inp"
          :class="{invalid: $v.limit.$dirty && !$v.limit.minValue}"
        >
        <label for="limit">Лимит</label>
        <span 
          class="helper-text invalid"
          v-if="$v.limit.$dirty && !$v.limit.minValue"
        >Минимальная величина {{$v.limit.$params.minValue.min}} рублей</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators'

export default {
  name: 'CategoryEdit',
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    select: null,
    title: '',
    limit: 1,
    current: null
  }),
  validations: {
    title: {
      required
    },
    limit: {
      minValue: minValue(10),
      required
    }
  },
  watch: {
    current(catId) {
      const { title, limit } = this.categories.find(c => c.id === catId);
      this.title = title;
      this.limit = limit;
    }
  },
  created() {
    const { id, title, limit } = this.categories[0];
    this.current = id;
    this.title = title;
    this.limit = limit;
  },
  mounted() {
    this.select = window.M.FormSelect.init(this.$refs.select);
    window.M.updateTextFields();
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        const categoryData = {
          id: this.current,
          title: this.title,
          limit: this.limit
        }

        await this.$store.dispatch('updateCategory', categoryData);
        this.$message('Категория обновлена');
        this.$emit('updated', categoryData);
      } catch(e) {
        console.log(e);
      }
    }
  }
}
</script>