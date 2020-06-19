<template>
  <section class="book-show">
    <div class="card -shadow">
      <div class="book-show-content">
        <div class="book-show-content__media">
          <img
            :src="'https://libro.pythonanywhere.com' + book.img"
            alt="Book"
          />
        </div>
        <div class="book-show-content__text">
          <p>
            <span>{{ $t('book-show.name') }}: </span>{{ book.title }}
          </p>
          <p>
            <span>{{ $t('book-show.author') }}: </span>{{ book.author }}
          </p>
          <p>
            <span>{{ $t('book-show.key_words') }}: </span>{{ book.key_words }}
          </p>
          <p>
            <span>{{ $t('book-show.quantity') }}: </span>{{ book.quantity }}
          </p>
          <p>
            <span>{{ $t('book-show.price') }}: </span>{{ book.price }}
          </p>
          <p>
            <span>{{ $t('book-show.rating') }}: </span>{{ book.rating }}
          </p>
          <p>
            <span>{{ $t('book-show.used') }}: </span>{{ book.used }}
          </p>
          <p>
            <span>{{ $t('book-show.electronic_version') }}: </span
            >{{ book.e_book }}
          </p>
          <p>
            <span>{{ $t('book-show.file') }}: </span>{{ book.file }}
          </p>
          <p>
            <span>{{ $t('book-show.has_printed_version') }}: </span
            >{{ book.printed_book }}
          </p>
          <p>
            <span>{{ $t('book-show.is_rare_book') }}: </span
            >{{ book.special_books }}
          </p>
          <p>
            <span>{{ $t('book-show.is_tutorial') }}: </span>{{ book.work_book }}
          </p>
          <p>
            <span>{{ $t('book-show.date_of_pub') }}: </span>{{ book.date_pub }}
          </p>
          <p>
            <span>{{ $t('book-show.date_of_get') }}: </span>{{ book.date_get }}
          </p>
          <p>
            <span>{{ $t('book-show.date_of_created') }}: </span
            >{{ book.created }}
          </p>
          <p>
            <span>{{ $t('book-show.UDC') }}: </span>{{ book.udc }}
          </p>
          <p>
            <span>{{ $t('book-show.university') }}: </span>{{ book.university }}
          </p>
          <p>
            <span>{{ $t('book-show.faculty') }}: </span>{{ book.faculty }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.book-show {
  max-width: 900px;
  margin: 24px auto 0;
  padding-bottom: 24px;
  &-content {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    &__text {
      display: grid;
      grid-template-columns: 1fr 1fr;
      line-height: 1.5;
      span {
        font-weight: bolder;
        color: black;
      }
    }
  }
}
</style>
