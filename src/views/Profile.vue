<template>
  <div class="profile">
    <div class="page-title">
      <h3 class="title">Профиль</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input
          id="description"
          type="text"
          class="inp inp-purple"
        >
        <label for="description" class="purple-text">Имя</label>
        <span class="helper-text invalid">name</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>
