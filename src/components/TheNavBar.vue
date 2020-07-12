<template>
  <section class="app-tabs -shadow">
    <div class="app-tabs-links">
      <router-link to="/book-list">{{ $t('nav-bar.book-list') }}</router-link>
      <!--      <router-link to="https://libro.pythonanywhere.com/admin">{{-->
      <!--        $t('nav-bar.book-manage')-->
      <!--      }}</router-link>-->
      <a href="https://libro.pythonanywhere.com/admin">{{ $t('nav-bar.book-manage') }}</a>
      <router-link to="/order-list">{{ $t('nav-bar.order-list') }}</router-link>
      <router-link to="/retrieved-books">{{ $t('nav-bar.retrieved-books') }}</router-link>
      <router-link to="/statistics">{{ $t('nav-bar.statistics') }}</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppTabs'
}
</script>

<style scoped></style>
