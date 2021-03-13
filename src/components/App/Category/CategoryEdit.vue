<template>
  <div class="category-edit">
    <div class="page-subtitle">
      <h4>Редактировать</h4>
    </div>

    <form>
      <div class="input-field">
        <label>Выберите категорию</label>
        <select>
          <option>Category</option>
        </select>
      </div>

      <div class="input-field">
        <input 
          type="text" 
          id="name"
          class="inp inp-purple"
        >
        <label for="name" class="purple-text">Выберите категорию</label>
        <span class="helper-text invalid">TITLE</span>
      </div>

      <div class="input-field">
        <input
          id="limit"
          type="number"
          class="inp inp-purple"
        >
        <label for="limit" class="purple-text">Лимит</label>
        <span class="helper-text invalid">LIMIT</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>
