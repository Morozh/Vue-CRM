<template>
  <nav class="navbar purple darken-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons white-text">dehaze</i>
        </a>
        <span class="white-text">12.12.12</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
              class="dropdown-trigger white-text"
              href="#"
              data-target="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class="dropdown-content">
            <li>
              <a href="#" class="white-text">
                <i class="material-icons">account_circle</i>Профиль
              </a>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="white-text">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
