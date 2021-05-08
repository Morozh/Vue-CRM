<template>
  <div class="about">
    <div class="page-title">
      <h3 class="title">О системе &laquo;Galago Design CRM system&raquo;</h3>
    </div>
    <section class="about-content">
      <div class="about-content__info">
        <p class="about-content__info-title">1. Что это за проект?</p>
        <p class="about-content__info-text">Это корпоративный портал с элементами CRM системы, предназначенный для облегчения работы и ускорения коммуникации наших сотрудников.</p>
      </div>
      <div class="about-content__info">
        <p class="about-content__info-title">2. Для кого предназначена система?</p>
        <p class="about-content__info-text">Система предназначена исключительно для внутреннего использования сотрудниками компании Galago Design.</p>
      </div>
      <div class="about-content__info">
        <p class="about-content__info-title">3. Могу ли я влиять на развитие проекта?</p>
        <p class="about-content__info-text">Любой сотрудник компании имеет право предложить новые идеи для развития и поддержки системы. Для этого обратитесь к одному из ведущих менеджеров: Сергей Солохин, Светлана Шевченко.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
  .about-content {
    &__info {
      &-title {
        font-family: 'Roboto Medium', sans-serif;
        font-size: 18px;
        font-weight: 500;
      }
      
      &-text {
        color: #2f2f2f;
      }
    }
  }
</style>