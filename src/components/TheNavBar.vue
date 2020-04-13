<template>
  <section class="app-tabs -shadow">
    <div class="app-tabs-links">
      <router-link to="/book-list">Каталог книг</router-link>
      <router-link to="/book-manage">Управление книгами</router-link>
      <router-link to="/order-list">Заказанные книги</router-link>
      <router-link to="/statistics">Статистика</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppTabs'
}
</script>

<style scoped></style>
