<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <div class="card-title">
        <img class="img img--full" src="@/assets/img/logo-small.png" alt="Galago" />
      </div>
      <div class="input-field">
        <input
          v-model.trim="email"
          id="email"
          type="text"
          class="inp"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label class="black-text" for="email">Email</label>
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
          class="inp"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label class="black-text" for="password">Пароль</label>
        <small 
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.email.required"
        >Введите пароль</small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Пароль не должен содержать менее {{$v.password.$params.minLength.min}} символов</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="text-gray center">
        Если у Вас нет аккаунта, обратитесь к администратору.
        <!-- <router-link to="/register">Зарегистрироваться</router-link> -->
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import messages from '@/common/messages'

export default {
  name: 'login',
  metaInfo: {
    title: 'Авторизация'
  },
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {
      email,
      required
    },
    password: {
      minLength: minLength(8), 
      required
    }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  methods: {
    async submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', formData);
        this.$router.push('/');
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-gray {
  color: rgb(181, 178, 178);
  font-size: 12px;
}
</style>
