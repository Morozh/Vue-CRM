<template>
  <div class="category-create">
    <div class="page-subtitle">
      <h4>Создать</h4>
    </div>

    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <input
          v-model="title"
          id="name"
          type="text"
          class="inp"
          :class="{invalid: $v.title.$dirty && !$v.title.required}"
        >
        <label for="name" class="black-text">Название</label>
        <span 
          class="helper-text invalid"
          v-if="$v.title.$dirty && !$v.title.required"
        >Введите название категории</span>
      </div>

      <div class="input-field">
        <input
          v-model.number="limit"
          id="limit"
          type="number"
          class="inp"
          :class="{invalid: $v.limit.$dirty && !$v.limit.minValue}"
        >
        <label for="limit" class="black-text">Лимит</label>
        <span 
          class="helper-text invalid"
          v-if="$v.limit.$dirty && !$v.limit.minValue"
        >Минимальная величина {{$v.limit.$params.minValue.min}} рублей</span>
      </div>

      <button class="btn waves-effect waves-light " type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators'

export default {
  name: 'CategoryCreate',
  data: () => ({
    title: '',
    limit: 1
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
  mounted() {
    window.M.updateTextFields();
  },
  methods: {
    async submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        const category = await this.$store.dispatch('createCategory', {
          title: this.title,
          limit: this.limit
        });

        this.title = '';
        this.limit = 10;
        this.$v.$reset();
        this.$message('Категория успешно добавлена');
        this.$emit('created', category);

      } catch(e) {
        console.log(e);
      }
    }
  }
}
</script>