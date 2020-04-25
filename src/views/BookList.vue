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
    <BookCard v-for="book in books" :key="book.id" :book="book" />
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
    ...mapState(['books', 'book'])
  }
}
</script>

<style lang="scss"></style>
