<template>
  <router-link :to="{ name: 'book-show', params: { id: book.id } }">
    <div class="card -shadow book-card">
      <div class="card-content">
        <img
          :src="`https://libro.pythonanywhere.com/` + book.Обложка"
          alt="book"
          class="card-content__image"
        />
        <div class="card-content-text">
          <p class="card-content-text__title">
            {{ $t('book-card.book-name') }}:
            <span class="card-content-text__subtitle">{{ book.Название }}</span>
          </p>
          <p class="card-content-text__title">
            {{ $t('book-card.author') }}:
            <span class="card-content-text__subtitle">{{ book.Автор }}</span>
          </p>
          <p class="card-content-text__title">
            {{ $t('book-card.date-of-pub') }}:
            <span class="card-content-text__subtitle">{{
              book.Опубликовано
            }}</span>
          </p>
          <p class="card-content-text__title">
            {{ $t('book-card.date-of-get') }}:
            <span class="card-content-text__subtitle">{{ book.Получено }}</span>
          </p>
          <p class="card-content-text__title">
            {{ $t('book-card.rating') }}:
            <span class="card-content-text__subtitle">{{ book.Рейтинг }}</span>
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
  },
  data() {
    return {
      // author:
    }
  }
}
</script>

<style lang="scss">
.card {
  margin-top: 0;
}
</style>
