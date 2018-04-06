<template>
  <transition name="slot">
    <div class="container">
      <h1>123</h1>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'sole',
  data() {
    return {
      a: 1
    }
  }
}
</script>

<style>
  /*.slot-enter,.slot-leave-to {
    opacity: 0;
  }*/
  .slot-enter-active{
    animation: tiao .8s;
  }
  .slot-leave-active {
    animation: tiao .8s reverse;
  }
  @keyframes tiao {
    0% {
      transform: scale(0)
    }
    50% {
      transform: scale(1.5)
    }
    100% {
      transform: scale(1)
    }
  }
</style>

