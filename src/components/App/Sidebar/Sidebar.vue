<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <div class="sidenav-logo">
      <img class="img img--full" src="@/assets/img/logo-small-white.png" alt="Galago Design" />
    </div>
    <router-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      :exact="link.exact"
      tag="li"
      active-class="active"
      class="sidebar-link"
    >
      <a href="#" class="pointer">
        <!-- <icon-arrow 
          class="sidebar-link__img"
          :color="`#fff`"
        /> -->
        <span>{{link.title}}</span>
      </a>
    </router-link>
    <div class="sidenav-copy">© Galago Design 2021. Все права защищены.</div>
  </ul>
</template>

<script>
// import IconArrow from '@/components/UI/Icons/IconArrow'

export default {
  props: ['value'],
  components: {
    // IconArrow
  },
  data: () => ({
    links: [
      {title: 'Счет', url: '/', exact: true},
      {title: 'История', url: '/history'},
      {title: 'Планирование', url: '/planning'},
      {title: 'Новая запись', url: '/record'},
      {title: 'Категории', url: '/categories'},
      {title: 'Проекты', url: '/projects'},
      {title: 'Документация', url: '/documentation'},
      {title: 'Сотрудники', url: '/employee'},
      {title: 'О системе', url: '/about'},
      // {title: 'Календарь', url: '/10'},
    ]
  })
}
</script>

<style lang="scss" scoped>
  .sidenav {
    z-index: 1001 !important;
    top: 0 !important;
    padding-top: 0 !important;
    background-color: #8e24aa !important;
    box-shadow: unset !important;
  }

  .sidenav-logo {
    display: flex;
    justify-content: center;
    padding: 11px 0 11px 0;
    align-items: center;
  }

  .sidebar-link {
    transition: all .3s ease;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    margin: 0 0 6px 15px;

    &__img {
      width: min(16px, 16px);
      margin-right: 10px;
    }

    a {
      display: flex;
      align-content: center;
      color: #FFF;
      padding: 0 15px !important;
    }

    &:hover {
      a {
        color: #d6d6d6;
        background-color: transparent;
      }
    }

    &.active {
      background-color: #FFF;
      
      a {
        color: #8e24aa;
      }
    }
  }

  .sidenav-copy {
    position: absolute;
    width: 100%;
    bottom: 20px;
    font-family: 'Roboto Medium', sans-serif;
    font-weight: 500;
    font-size: 11px;
    color: #FFF;
    text-align: center;
  }
</style>
