<template>
  <router-link :to="{ name: 'book-show', params: { id: book.id } }">
    <!--    <div class="card -shadow book-card">-->
    <!--      <div class="card-content">-->
    <!--        <img-->
    <!--          :src="`https://libro.pythonanywhere.com/` + book.img"-->
    <!--          alt="book"-->
    <!--          class="card-content__image"-->
    <!--        />-->
    <!--        <div class="card-content-text">-->
    <!--          <p class="card-content-text__title">-->
    <!--            {{ $t('book-card.book-name') }}:-->
    <!--            <span class="card-content-text__subtitle">{{ book.title }}</span>-->
    <!--          </p>-->
    <!--          <p class="card-content-text__title">-->
    <!--            {{ $t('book-card.author') }}:-->
    <!--            <span class="card-content-text__subtitle">{{ book.author }}</span>-->
    <!--          </p>-->
    <!--          <p class="card-content-text__title">-->
    <!--            {{ $t('book-card.date-of-pub') }}:-->
    <!--            <span class="card-content-text__subtitle">{{ book.date_pub }}</span>-->
    <!--          </p>-->
    <!--          <p class="card-content-text__title">-->
    <!--            {{ $t('book-card.date-of-get') }}:-->
    <!--            <span class="card-content-text__subtitle">{{ book.date_get }}</span>-->
    <!--          </p>-->
    <!--          <p class="card-content-text__title">-->
    <!--            {{ $t('book-card.rating') }}:-->
    <!--            <span class="card-content-text__subtitle">{{ book.rating }}</span>-->
    <!--          </p>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="card book-list-card">
      <div class="front">
        <img :src="`https://libro.pythonanywhere.com/` + book.img" alt="Book" />
<!--        <img src="../assets/img/books/Alice-in-Wonderland-Orange-Front.jpg" alt="">-->
      </div>
      <div class="back">
        <p>
          {{ $t('book-card.book-name') }}: <span>{{ book.title }}</span>
        </p>
        <p>
          {{ $t('book-card.author') }}: <span>{{ book.author }}</span>
        </p>
        <p>
          {{ $t('book-card.date-of-pub') }}: <span>{{ book.date_pub }}</span>
        </p>
        <p>
          {{ $t('book-card.date-of-get') }}: <span>{{ book.date_get }}</span>
        </p>
        <p>
          {{ $t('book-card.rating') }}: <span>{{ book.rating }}</span>
        </p>
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
/*.card {
  padding: 7px;
  position: relative;
  width: 300px;
  height: 250px;
  &:hover {
    .front {
      transform: perspective(6000px) rotateY(-180deg);
    }

    .back {
      transform: perspective(600px) rotateY(0);
    }
  }
}
.front,
.back {
  width: 100%;
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: transform 0.4s ease;
  position: absolute;
}
.front {
  transform: perspective(600px) rotateY(0);
  display: flex;
  img {
    width: 95%;
    height: 94%;
  }
}
.back {
  transform: perspective(600px) rotateY(180deg);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}*/
</style>
