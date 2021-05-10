<template>
  <div class="documentation">
    <div class="page-title">
      <h3 class="title">Документация по технологиям</h3>
    </div>
    <section class="documentation-content">
      <div class="documentation-content__doc-card doc-card">
        <div class="doc-card__row">
          <div class="doc-card__img">
            <img src="@/assets/img/vue-logo.png" alt="Vue" />
          </div>
          <div class="doc-card__title">VUE.js</div>
        </div>
        <ul class="doc-card__list">
          <li class="doc-card__list-item">
            <a href="https://ru.vuejs.org/v2/guide/" target="_blank">1. Официальная документация</a>
          </li>
          <li class="doc-card__list-item">
            <a href="https://ru.vuejs.org/v2/style-guide/index.html" target="_blank">2. Рекомендации по стилю написания кода</a>
          </li>
          <li class="doc-card__list-item">
            <a href="https://vuex.vuejs.org/ru/" target="_blank">3. Что такое Vuex</a>
          </li>
          <li class="doc-card__list-item">
            <a href="https://router.vuejs.org/ru/" target="_blank">4. Официальный маршрутизатор Vue Router</a>
          </li>
        </ul>
      </div>

      <div class="documentation-content__doc-card doc-card">
        <div class="doc-card__row">
          <div class="doc-card__img">
            <img src="@/assets/img/pug-logo.png" alt="PUG" />
          </div>
          <div class="doc-card__title">HTML PUG</div>
        </div>
        <ul class="doc-card__list">
          <li class="doc-card__list-item">
            <a href="https://pugjs.org/api/getting-started.html" target="_blank">1. Официальная документация</a>
          </li>
          <li class="doc-card__list-item">
            <a href="https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228#Инклюды" target="_blank">2. Быстрое руководство</a>
          </li>
        </ul>
      </div>

      <div class="documentation-content__doc-card doc-card">
        <div class="doc-card__row">
          <div class="doc-card__img">
            <img src="@/assets/img/sass-logo.png" alt="Sass" />
          </div>
          <div class="doc-card__title">Sass/Scss</div>
        </div>
        <ul class="doc-card__list">
          <li class="doc-card__list-item">
            <a href="https://sass-scss.ru/" target="_blank">1. Официальная документация</a>
          </li>
        </ul>
      </div>

      <div class="documentation-content__doc-card doc-card">
        <div class="doc-card__row">
          <div class="doc-card__img">
            <img src="@/assets/img/webpack-logo.png" alt="Webpack" />
          </div>
          <div class="doc-card__title">Webpack</div>
        </div>
        <ul class="doc-card__list">
          <li class="doc-card__list-item">
            <a href="https://webpack.js.org/" target="_blank">1. Официальная документация</a>
          </li>
          <li class="doc-card__list-item">
            <a href="https://habr.com/ru/post/514838/" target="_blank">2. Быстрое руководство</a>
          </li>
        </ul>
      </div>

      <div class="documentation-content__doc-card doc-card">
        <div class="doc-card__row">
          <div class="doc-card__img">
            <img src="@/assets/img/gulp-logo.png" alt="Gulp" />
          </div>
          <div class="doc-card__title">Gulp 4</div>
        </div>
        <ul class="doc-card__list">
          <li class="doc-card__list-item">
            <a href="https://gulpjs.com/" target="_blank">1. Официальная документация</a>
          </li>
          <li class="doc-card__list-item">
            <a href="https://webdesign-master.ru/blog/tools/2016-03-09-gulp-beginners.html" target="_blank">2. Руководство на русском языке</a>
          </li>
        </ul>
      </div>

      <div class="documentation-content__doc-card doc-card">
        <div class="doc-card__row">
          <div class="doc-card__img">
            <img src="@/assets/img/javascript-logo.png" alt="JavaScript" />
          </div>
          <div class="doc-card__title">JavaScript полезные ссылки</div>
        </div>
        <ul class="doc-card__list">
          <li class="doc-card__list-item">
            <a href="https://habr.com/ru/post/305900/" target="_blank">1. Изучение ES6</a>
          </li>
          <li class="doc-card__list-item">
            <a href="https://learn.javascript.ru/" target="_blank">2. Современный учебник на русском языке</a>
          </li>
          <li class="doc-card__list-item">
            <a href="https://www.codewars.com" target="_blank">3. Практика на развитие навыков</a>
          </li>
          <li class="doc-card__list-item">
            <a href="https://github.com/leonidlebedev/javascript-airbnb/#destructuring" target="_blank">4. Правильный подход к написанию кода от Airbnb</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Documentation'
}
</script>

<style lang="scss" scoped>
  .doc-card {
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 1px solid #e6e6e6;

    &__row {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    &__img {
      display: flex;
      justify-content: center;

      img {
        width: auto;
        height: max(120px, 120px);
      }
    }

    &__title {
      font-family: 'Roboto Bold', sans-serif;
      font-size: 20px;
      margin: 16px 0 0 0;
    }

    &__list {
      &-item {
        a {
          color: #000;
          transition: all .3s ease;
          font-size: 18px !important;

          &:hover {
            color: #8e24aa;
            text-decoration: underline;
          }
        }
      }
    }
  }

</style>
