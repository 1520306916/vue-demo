<template>
  <div class='app'>
    <h2 class='h2'>{{msg}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg : 'vue 首页'
      }
    }
  }
</script>

<style>
  .h2 {
     text-align: center;
  }
</style>

