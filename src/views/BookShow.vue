<template>
  <section class="book-show">
    <div class="card -shadow">
      <div class="book-show-content">
        <div class="book-show-content__media">
          <img
            :src="'https://libro.pythonanywhere.com' + book.Обложка"
            alt="Book"
          />
        </div>
        <div class="book-show-content__text">
          <p>
            <span>{{ $t('book-show.name') }}: </span>{{ book.Название }}
          </p>
          <p>
            <span>{{ $t('book-show.author') }}: </span>{{ book.Автор }}
          </p>
          <p>
            <span>{{ $t('book-show.key_words') }}: </span
            >{{ book.ключевые_слова }}
          </p>
          <p>
            <span>{{ $t('book-show.quantity') }}: </span>{{ book.Количество }}
          </p>
          <p>
            <span>{{ $t('book-show.price') }}: </span>{{ book.Цена }}
          </p>
          <p>
            <span>{{ $t('book-show.rating') }}: </span>{{ book.Рейтинг }}
          </p>
          <p>
            <span>{{ $t('book-show.used') }}: </span>{{ book.Использовано }}
          </p>
          <p>
            <span>{{ $t('book-show.electronic_version') }}: </span
            >{{ book.Электроная_версия }}
          </p>
          <p>
            <span>{{ $t('book-show.file') }}: </span>{{ book.Файл }}
          </p>
          <p>
            <span>{{ $t('book-show.has_printed_version') }}: </span
            >{{ book.Печатная_версия }}
          </p>
          <p>
            <span>{{ $t('book-show.is_rare_book') }}: </span
            >{{ book.Редкая_книга }}
          </p>
          <p>
            <span>{{ $t('book-show.is_tutorial') }}: </span
            >{{ book.Учебное_пособие }}
          </p>
          <p>
            <span>{{ $t('book-show.date_of_pub') }}: </span
            >{{ book.Опубликовано }}
          </p>
          <p>
            <span>{{ $t('book-show.date_of_get') }}: </span>{{ book.Получено }}
          </p>
          <p>
            <span>{{ $t('book-show.date_of_created') }}: </span
            >{{ book.created }}
          </p>
          <p>
            <span>{{ $t('book-show.UDC') }}: </span>{{ book.УДК }}
          </p>
          <p>
            <span>{{ $t('book-show.university') }}: </span
            >{{ book.Университет }}
          </p>
          <p>
            <span>{{ $t('book-show.faculty') }}: </span>{{ book.Факультет }}
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
  &-content {
    display: flex;
    flex-direction: column;
    text-align: center;
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
