<template>
  <section class="section-fluid">
    <BaseSearch label="Search">
      <BaseIcon name="search" width="30" height="30" />
    </BaseSearch>
    <BookCard v-for="book in book.books" :key="book.id" :book="book" />
  </section>
</template>

<script>
import BookCard from '@/components/BookCard.vue'
import store from '@/store'
import { mapState } from 'vuex'
export default {
  components: {
    BookCard
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    store.dispatch('book/fetchBooks').then(() => {
      next()
    })
  },
  computed: {
    ...mapState(['books', 'book'])
  }
}
</script>

<style lang="scss"></style>
