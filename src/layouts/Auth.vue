<template>
  <div class="auth-content empty-layout">
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <router-view />
  </div>
</template>

<script>
import messages from '@/common/messages'

export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Что-то пошло не так');
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-content {
  width: 100%;
  background-color: #FFF;
}

.lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
}

.line {
  position: absolute;
  width: 2px;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba($color: #fff, $alpha: 1.0);
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to top, #8e24aa, #ffffff 75%, #ffffff 100%);
    animation: drop 4s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }

  &:nth-child(1) {
     margin-left: -25%;

    &::after {
      animation-delay: 1s;
    }
  }

  &:nth-child(2) {
     margin-left: -50%;

    &::after {
      animation-delay: 2s;
    }
  }
   
  &:nth-child(3) {
    margin-left: 0%;

    &::after {
      animation-delay: 1.5s;
    }
  }

  &:nth-child(4) {
     margin-left: 25%;

    &::after {
      animation-delay: 2s;
    }
  }

  &:nth-child(5) {
    margin-left: 50%;

    &::after {
      animation-delay: 1s;
    }
  }
}

@keyframes drop {
  0% {
    top: 100;
  }

  50% {
    top: 100%;
  }
    
  100% {
    top: -50%;
  }
}

</style>
