<template>
  <div class="record">
    <div class="page-title">
      <h3 class="title">Новая запись</h3>
    </div>

    <loader v-if="loading" />

    <p class="center" v-else-if="!categories.length">Категории отсутствуют.
      <router-link to="/categories">Добавить категорию</router-link>
    </p>

    <form
      class="form" 
      @submit.prevent="submitHandler"
      v-else
    >
      <div class="input-field">
        <select ref="select" v-model="category">
          <option
            v-for="cat in categories"
            :key="cat.id"
            :value="cat.id"
          >{{cat.title}}</option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <p>
        <label>
          <input
            v-model="type"
            class="with-gap"
            name="type"
            type="radio"
            value="income"
          />
          <span>Доход</span>
        </label>
      </p>

      <p>
        <label>
          <input
            v-model="type"
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
          />
          <span>Расход</span>
        </label>
      </p>

      <div class="input-field">
        <input
          v-model.number="amount"
          id="amount"
          type="number"
          class="inp"
          :class="{invalid: $v.amount.$dirty && !$v.amount.minValue}"
        >
        <label for="amount" class="purple-text">Сумма</label>
        <span 
          class="helper-text invalid"
          v-if="$v.amount.$dirty && !$v.amount.minValue"
        >Минимальная величина {{$v.amount.$params.minValue.min}} рублей</span>
      </div>

      <div class="input-field">
        <input
          v-model="description"
          id="description"
          type="text"
          class="inp"
          :class="{invalid: $v.description.$dirty && !$v.description.required}"
        >
        <label for="description" class="purple-text">Описание</label>
        <span 
          class="helper-text invalid"
          v-if="$v.description.$dirty && !$v.description.required"
        >Введите описание новой записи</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

export default {
  name: 'Record',
  data: () => ({
    loading: true,
    select: null,
    categories: [],
    category: null,
    type: 'outcome',
    amount: 10,
    description: ''
  }),
  validations: {
    amount: {
      minValue: minValue(10),
      required
    },
    description: {
      required
    }
  },
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
    this.loading = false;

    if(this.categories.length) {
      this.category = this.categories[0].id;
    }

    this.$nextTick(() => {
      this.select = window.M.FormSelect.init(this.$refs.select);
      window.M.updateTextFields();
    });
  },
  computed: {
    ...mapGetters(['info']),
    canCreateRecord(){
      if(this.type === 'income'){
        return true;
      }

      return this.info.bill >= this.amount
    }
  },
  methods: {
    async submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      if(this.canCreateRecord) {
        try {
          await this.$store.dispatch('createRecord', {
            categoryId: this.category,
            amount: this.amount,
            description: this.description,
            type: this.type,
            date: new Date().toJSON()
          });

          const bill = this.type === 'income'
            ? this.info.bill + this.amount
            : this.info.bill - this.amount;

          await this.$store.dispatch('updateInfo', {bill});

          this.$message(`Запись успешно создана`);
          this.$v.reset();
          this.amount = 10;
          this.description = '';
        } catch (e) {
          console.log(e);
        }
      } else {
        this.$message(`Недостаточно средств на счете (${this.amount - this.info.bill})`);
      }
    }
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  }
}
</script>
