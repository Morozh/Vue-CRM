<template>
  <div class="profile">
    <div class="page-title">
      <h3 class="title">Профиль</h3>
    </div>

    <form class="form" @submit.prevent="submitHandler">
      <div class="input-field">
        <input
          v-model.trim="name"
          id="description"
          type="text"
          class="inp inp-purple"
          :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
        >
        <label for="description" class="purple-text">Имя</label>
        <small 
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >Поле Имя должно быть корректным</small>
      </div>
      <div class="input-field">
        <input
          v-model.trim="role"
          id="description"
          type="text"
          class="inp inp-purple"
          :class="{invalid: ($v.role.$dirty && !$v.role.required) || ($v.role.$dirty && !$v.role.minLength)}"
        >
        <label for="description" class="purple-text">Должность</label>
        <small 
          class="helper-text invalid"
          v-if="$v.role.$dirty && !$v.role.required"
        >Поле Должность должно быть корректным</small>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Profile',
  metaInfo: {
    title: 'Профиль'
  },
  data: () => ({
    name: '',
    role: ''
  }),
  validations: {
    name: {
      minLength: minLength(2),
      required
    },
    role: {
      minLength: minLength(2)
    }
  },
  methods: {
    async submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        name: this.name,
        role: this.role
      }

      try {
        await this.$store.dispatch('updateInfo', formData);
        this.$message(`Вы успешно обновили имя`);
      } catch(e) {
        console.log(e);
        throw e;
      }
    }
  }
}
</script>
