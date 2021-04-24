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
      <div class="input-field">
        <input
          v-model.trim="name"
          id="name"
          type="text"
          class="inp"
          :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
        >
        <label class="black-text" for="name">Имя</label>
        <small 
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >Введите имя</small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.name.$dirty && !$v.name.minLength"
        >Имя не должно быть менее {{$v.name.$params.minLength.min}} символов</small>
      </div>
      <div class="input-field">
        <input
          v-model.trim="role"
          id="role"
          type="text"
          class="inp"
          :class="{invalid: ($v.role.$dirty && !$v.role.required) || ($v.role.$dirty && !$v.role.minLength)}"
        >
        <label class="black-text" for="name">Должность</label>
        <small 
          class="helper-text invalid"
          v-if="$v.role.$dirty && !$v.role.required"
        >Введите должность</small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.role.$dirty && !$v.role.minLength"
        >Должность не должна быть менее {{$v.role.$params.minLength.min}} символов</small>
      </div>
      <p>
        <label>
          <input 
            v-model="agree"
            type="checkbox"
          />
          <span class="privacy-agree">Пользовательское соглашение</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрировать
          <i class="material-icons right">send</i>
        </button>
      </div>

      <!-- <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти</router-link>
      </p> -->
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import messages from '@/common/messages'

export default {
  name: 'register',
  metaInfo: {
    title: 'Регистрация'
  },
  data: () => ({
    email: '',
    password: '',
    name: '',
    role: '',
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
    role: {
      minLength: minLength(2),
      required
    },
    agree: {
      checked: v => v
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
        password: this.password,
        name: this.name,
        role: this.role
      }

      try {
        await this.$store.dispatch('register', formData);
        this.$message('Регистрация прошла успешно');
        this.$router.push('/login');
      } catch(e) {
        console.log(e);
        throw e;
      }
    }
  }
}
</script>
