<template>
  <router-link :to="{ name: 'book-show', params: { id: book.id } }">
    <div class="card -shadow book-card">
      <div class="card-content">
        <img :src="book.image" alt="book" class="card-content__image" />
        <div class="card-content-text">
          <p class="card-content-text__title">
            {{ $t('book-card.author') }}:
            <span class="card-content-text__subtitle">{{ book.author }}</span>
          </p>
          <p class="card-content-text__title">
            {{ $t('book-card.book-name') }}:
            <span class="card-content-text__subtitle">{{ book.name }}</span>
          </p>
          <p class="card-content-text__title">
            {{ $t('book-card.date-of-pub') }}:
            <span class="card-content-text__subtitle">{{
              book.date_of_pub
            }}</span>
          </p>
          <p class="card-content-text__title">
            {{ $t('book-card.date-of-get') }}:
            <span class="card-content-text__subtitle">{{
              book.date_of_get
            }}</span>
          </p>
          <p class="card-content-text__title">
            {{ $t('book-card.rating') }}:
            <span class="card-content-text__subtitle">{{ book.rating }}</span>
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

<style lang="scss"></style>
