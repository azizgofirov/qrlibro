<template>
  <div id="app">
    <TheAppBar />
    <TheNavBar />
    <router-view />
  </div>
</template>

<script>
import TheAppBar from '@/components/TheAppBar.vue'
import TheNavBar from '@/components/TheNavBar.vue'
export default {
  components: {
    TheAppBar,
    TheNavBar
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
