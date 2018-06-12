<template>
  <div id="app">
    <app-header></app-header>
    <div id="main">
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '@/components/public/header'
import appFooter from '@/components/public/footer'
export default {
  components: {
    appHeader, // 公共底部
    appFooter // 公共头部
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @colorRed;
  margin-top: 60px;
}
</style>
