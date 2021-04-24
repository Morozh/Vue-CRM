<template>
  <nav class="navbar white">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="navbar-timer black-text">{{date | date('datetime')}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            ref="dropdown"
            class="dropdown-trigger black-text user-dropdown"
            href="#"
            data-target="dropdown"
          >
            <div class="user-img">
              <img 
                v-if="name === 'Руслан'"
                class="user-img__img" 
                src="@/assets/img/useravatar.png" 
                alt="Аватар" 
              />
              <img 
                v-else
                class="user-img__img" 
                src="@/assets/img/avatar.png" 
                alt="Аватар" 
              />
            </div>
            <div class="user-info">
              <span class="user-info__text">{{name}}</span>
              <span class="user-info__text user-info__text_big text-gray">{{role}}</span>
            </div>
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/login?message=logout');
    }
  },
  computed: {
    name() {
      return this.$store.getters.info.name;
    },
    role() {
      return this.$store.getters.info.role;
    }
    // profileImage() {
    //   return this.$store.getters.info.img;
    // }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000)
    this.dropdown = window.M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    });
  },
  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-timer {
    font-family: 'Roboto Medium', sans-serif !important;
    font-weight: 500;
  }

  .user-dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(232px, 232px);
  }

  .user-img {
    min-width: 48px;
    max-width: 48px;
    height: min(48px, 48px);
    background-color: #eeeeee;
    border-radius: 50%;
    margin: 0 12px 0 0;
    overflow: hidden;
    display: flex;
    align-content: center;
    justify-content: center;
    border: 1px solid #eeeeee;

    &__img {
      object-fit: cover;
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    padding: 6px 0;

    &__text {
      line-height: 16px;

      &_big {
        font-family: 'Roboto Medium', sans-serif;
        font-weight: 500;
        font-size: 12px;
        margin: 6px 0 0 0;
      }
    }
  }

  .dropdown-content {
    top: 67px !important;
    width: 232px !important;
  }

  .text-gray {
    color: #adadad;
  }
</style>
