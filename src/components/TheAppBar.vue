<template>
  <section class="app-nav-bar -shadow section-fluid">
    <div class="app-nav-bar-items">
      <div class="app-nav-bar__logo">
        <router-link to="/">
          <img src="../assets/img/logo.png" alt="Logo" />
        </router-link>
      </div>
      <div class="app-nav-bar__unversity_name">
        <p>
          I. A. Karimov nomidagi
          <br />Toshkent Davlat Texnika Universiteti
        </p>
      </div>
      <div class="app-nav-bar__lang">
        <BaseSelect :options="options" value="Ru" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: this.$store.state.options
    }
  }
}
</script>

<style></style>
