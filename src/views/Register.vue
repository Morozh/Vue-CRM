<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Система расчетов Galago</span>
      <div class="input-field">
        <input
          v-model.trim="email"
          id="email"
          type="text"
          class="inp inp-orange"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label class="orange-text" for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Поле Email не заполнено</small>
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите корректный Email</small>
      </div>
      <div class="input-field">
        <input
          v-model.trim="password"
          id="password"
          type="password"
          class="inp inp-orange"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label class="orange-text" for="password">Пароль</label>
        <small 
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.email.required"
        >Введите пароль</small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Пароль не должен содержать менее {{$v.password.$params.minLength.min}} символов</small>
      </div>
      <div class="input-field">
        <input
          v-model.trim="name"
          id="name"
          type="text"
          class="inp inp-orange"
          :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
        >
        <label class="orange-text" for="name">Имя</label>
        <small 
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >Введите ваше имя</small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.name.$dirty && !$v.name.minLength"
        >Имя не должно быть менее {{$v.name.$params.minLength.min}} символов</small>
      </div>
      <p>
        <label>
          <input 
            v-model="agree"
            type="checkbox"
          />
          <span class="privacy-agree">С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false
  }),
  validations: {
    email: {
      email,
      required
    },
    password: {
      minLength: minLength(8), 
      required
    },
    name: {
      minLength: minLength(2),
      required
    },
    agree: {
      checked: v => v
    }
  },
  methods: {
    submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }

      console.log(formData);
      this.$router.push('/login');
    }
  }
}
</script>
