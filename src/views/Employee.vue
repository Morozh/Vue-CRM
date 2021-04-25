<template>
  <div class="employee">
    <div class="page-title">
      <h3 class="title">Сотрудники</h3>
    </div>
    <section class="employee-list">
      <div class="employee-row">
        <div class="employee-col">
          <div class="employee-col__img">
            <img src="@/assets/img/avatar.png" alt="Аватар" />
          </div>
        </div>
        <div class="employee-col">
          <div class="employee-col__name">Сергей</div>
          <div class="employee-col__role">Менеджер</div>
          <div class="employee-col__contacts">
            <div class="employee-col__contacts-telegram">@asdsad</div>
            <div class="employee-col__contacts-contact">asdasd@alamics.ru</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Employee'
}
</script>

<style lang="scss" scoped>
  .employee-list {
    display: flex;
    flex-direction: column;
  }

  .employee-row {
    display: flex;
    justify-content: stretch;
    align-items: center;
    margin: 16px 0;
  }

  .employee-col {
    padding: 20px;
    flex-grow: 1;
  }
</style>