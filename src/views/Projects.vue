<template>
  <div class="projects">
    <div class="page-title">
      <h3 class="title">Активные проекты компании</h3>
    </div>
    <section class="projects-list">
      <div href="https://selvery.ru/" class="projects-item">
        <div class="projects-item__row">
          <div class="projects-item__img">
            <img src="@/assets/img/projects/selvery-landing-preview.png" alt="Selvery" />
          </div>
          <div class="projects-item__info">
            <div class="projects-item__title">Selvery</div>
            <div class="projects-item__description">
              Это цифровая система создания и демонстрации покупателю 
              <br> адаптированного контента с непрерывным сбором
              <br> данных о процессе продажи.
            </div>
            <a class="projects-item__link" href="#">
              Перейти
            </a>
          </div>
        </div>
      </div>

      <div href="https://selvery.ru/" class="projects-item">
        <div class="projects-item__row">
          <div class="projects-item__img">
            <img src="@/assets/img/projects/selvery-dashboard.svg" alt="Selvery Dashboard" />
          </div>
          <div class="projects-item__info">
            <div class="projects-item__title">Selvery Dashboard</div>
            <div class="projects-item__description">
              Акселлератор таргетинговых продаж.
            </div>
            <a class="projects-item__link" href="#">
              Перейти
            </a>
          </div>
        </div>
      </div>

      <div href="https://selvery.ru/" class="projects-item">
        <div class="projects-item__row">
          <div class="projects-item__img">
            <img src="@/assets/img/projects/logo_domrf.svg" alt="Аренда ДОМ.РФ" />
          </div>
          <div class="projects-item__info">
            <div class="projects-item__title">Аренда ДОМ.РФ</div>
            <div class="projects-item__description">
              Новый уровень арендного жилья. Надежность. 
              <br>Официальный договор аренды, понятные правила аренды.
              <br>Комфорт. Cовременная отделка, мебель и бытовая техника.
            </div>
            <a class="projects-item__link" href="#">
              Перейти
            </a>
          </div>
        </div>
      </div>

      <div href="https://selvery.ru/" class="projects-item">
        <div class="projects-item__row">
          <div class="projects-item__img">
            <img src="@/assets/img/projects/logo_cz.svg" alt="Честный знак" />
          </div>
          <div class="projects-item__info">
            <div class="projects-item__title">Честный ЗНАК</div>
            <div class="projects-item__description">
              Честный ЗНАК — Национальная система цифровой маркировки и 
              <br>прослеживаемости товаров Центра развития перспективных технологий, 
              <br>созданного для реализация глобальных проектов в цифровой экономике.
            </div>
            <a class="projects-item__link" href="#">
              Перейти
            </a>
          </div>
        </div>
      </div>

      <div href="https://selvery.ru/" class="projects-item">
        <div class="projects-item__row">
          <div class="projects-item__img">
            <img src="@/assets/img/projects/logo_sber-premier.svg" alt="СБЕР Премьер" />
          </div>
          <div class="projects-item__info">
            <div class="projects-item__title">СБЕР Премьер</div>
            <div class="projects-item__description">
              СБЕР презентации для защита дома или квартиры.
              <br>Проект предназначен исключительно для планшетов.
            </div>
            <a class="projects-item__link" href="#">
              Перейти
            </a>
          </div>
        </div>
      </div>

      <div href="https://selvery.ru/" class="projects-item">
        <div class="projects-item__row">
          <div class="projects-item__img">
            <img src="@/assets/img/projects/logo_sber-fabrika.svg" alt="СБЕР Фабрика" />
          </div>
          <div class="projects-item__info">
            <div class="projects-item__title">СБЕР Фабрика</div>
            <div class="projects-item__description">
              СБЕР фабрика презентаций для менеджеров СберБанк.
            </div>
            <a class="projects-item__link" href="#">
              Перейти
            </a>
          </div>
        </div>
      </div>

      <div href="https://selvery.ru/" class="projects-item">
        <div class="projects-item__row">
          <div class="projects-item__img">
            <img src="@/assets/img/projects/logo_svmed.svg" alt="Современная медицина" />
          </div>
          <div class="projects-item__info">
            <div class="projects-item__title">Современная медицина</div>
            <div class="projects-item__description">
              Многопрофильный медицинский центр «Современная медицина» оказывает 
              <br>широкий спектр амбулаторнополиклини- ческих, диагностических и&nbsp;лечебных
              <br>услуг для взрослых и&nbsp;детей в&nbsp;городе Верещагино.
            </div>
            <a class="projects-item__link" href="#">
              Перейти
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style lang="scss" scoped>
  .projects-list {
    display: flex;
    flex-direction: column;
  }

  .projects-item {
    width: 100%;
    margin: 16px 0;
    padding: 20px;
    height: 200px;
    max-height: 200px;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgb(0 0 0 / 4%), 0 2px 6px rgb(0 0 0 / 4%), 0 0 1px rgb(0 0 0 / 4%);

    &__row {
      display: flex;
      align-content: center;
      height: 100%;
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__img {
      min-width: 300px;
      max-width: 300px;
      max-height: 200px;
      margin: 0 32px 0 0;
      overflow: hidden;
      border: 1px solid #dddddd;
      border-radius: 8px;
      padding: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__title {
      font-family: 'Roboto Bold', sans-serif;
      color: rgb(39, 39, 39);
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
    }

    &__description {
      font-family: 'Roboto Light', sans-serif;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      color: rgb(39, 39, 39);
    }
  }
</style>
