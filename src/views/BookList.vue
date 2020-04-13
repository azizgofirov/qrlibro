<template>
  <section class="section-fluid">
    <div class="form">
      <label>
        <BaseIcon name="search" width="30" height="30" />
        <input
          class="-shadow"
          type="search"
          v-model="search"
          placeholder="Поиск. . ."
        />
      </label>
    </div>
    <BookCard v-for="book in filteredBooks" :key="book.id" :book="book" />
  </section>
</template>

<script>
import BookCard from '@/components/BookCard.vue'
import store from '@/store'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      search: ''
    }
  },
  components: {
    BookCard
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    store.dispatch('book/fetchBooks').then(() => {
      next()
    })
  },
  computed: {
    ...mapState(['books', 'book']),
    filteredBooks() {
      return this.book.books.filter(data => {
        let book_author = data.author
          .toLowerCase()
          .match(this.search.toLowerCase())
        let book_name = data.name.toLowerCase().match(this.search.toLowerCase())
        return book_author || book_name
      })
    }
  }
}
</script>

<style lang="scss"></style>
