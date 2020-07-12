<template>
  <section class="app-nav-bar -shadow section-fluid">
    <div class="app-nav-bar-items">
      <div class="app-nav-bar__logo">
        <router-link to="/">
          <img src="../assets/img/Logo.png" alt="Logo" />
        </router-link>
      </div>
      <div class="app-nav-bar__unversity_name">
        <p>
          I. A. Karimov nomidagi
          <br />Toshkent Davlat Texnika Universiteti
        </p>
      </div>
      <div class="app-nav-bar__lang">
        <LanguageSwitcher />
      </div>
      <router-link to="/login">Login</router-link>
    </div>
  </section>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher'
export default {
  components: { LanguageSwitcher },
  data() {
    return {
      options: this.$store.state.options
    }
  }
}
</script>

<style></style>
