<template>
  <div class="record">
    <div class="page-title">
      <h3 class="title">Новая запись</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <label>Выберите категорию</label>
        <select>
          <option>name cat</option>
        </select>
      </div>

      <p>
        <label>
          <input
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
          id="amount"
          type="number"
          class="inp inp-purple"
        >
        <label for="amount" class="purple-text">Сумма</label>
        <span class="helper-text invalid">amount пароль</span>
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
          class="inp inp-purple"
        >
        <label for="description" class="purple-text">Описание</label>
        <span class="helper-text invalid">description пароль</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>
