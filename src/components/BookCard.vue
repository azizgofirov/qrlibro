<template>
  <router-link :to="{ name: 'book-show', params: { id: book.id } }">
    <div class="card -shadow book-card">
      <div class="card-content">
        <img :src="book.image" alt="book" class="card-content__image" />
        <div class="card-content-text">
          <p class="card-content-text__title">
            Автор:
            <span class="card-content-text__subtitle">{{ book.author }}</span>
          </p>
          <p class="card-content-text__title">
            Название книги:
            <span class="card-content-text__subtitle">{{ book.name }}</span>
          </p>
          <p class="card-content-text__title">
            Дата издания:
            <span class="card-content-text__subtitle">{{ book.дата_публикации }}</span>
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    book: Object
  }
}
</script>

<style lang="scss">
</style>
