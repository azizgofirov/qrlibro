<template>
  <section class="app-tabs -shadow">
    <div class="app-tabs-links">
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :to="tab.url"
        class="app-tabs-links__link"
      >{{ tab.name }}</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppTabs',
  data() {
    return {
      tabs: [
        { name: 'Каталог книг', url: '/book-list' },
        { name: 'Управление книгами', url: '/book-manage' },
        { name: 'Заказанные книги', url: '/book-order' },
        { name: 'Статистика', url: '/statistics' }
      ]
    }
  }
}
</script>

<style scoped></style>
