<template>
  <section class="section-fluid">
    <div class="form">
      <label>
        <BaseIcon name="search" width="30" height="30" />
        <input class="-shadow" type="search" v-model="search" :placeholder="$t('search')" />
      </label>
    </div>
    <div class="card -shadow">
      <table>
        <thead>
          <tr>
            <th>{{ $t('orders.headers.number') }}</th>
            <th>{{ $t('orders.headers.avatar') }}</th>
            <th>{{ $t('orders.headers.user-info') }}</th>
            <th>{{ $t('orders.headers.ordered-books') }}</th>
            <th>{{ $t('orders.headers.book-name') }}</th>
            <th>{{ $t('orders.headers.ISBN') }}</th>
            <th>{{ $t('orders.headers.date-of-pub') }}</th>
            <th>{{ $t('orders.headers.author') }}</th>
            <th>{{ $t('orders.headers.udc') }}</th>
            <th>{{ $t('orders.headers.remained-time') }}</th>
            <th>{{ $t('orders.headers.took') }}</th>
          </tr>
        </thead>
        <tr v-for="(searchedOrder, index) in searchedOrders" :key="index">
          <td>
            <div class="order-id">{{ index + 1 }}</div>
          </td>
          <td>
            <div class="user-avatar">
              <img
                :src="
                  `https://libro.pythonanywhere.com/` + searchedOrder.Аватар
                "
                alt="Avatar"
              />
            </div>
          </td>
          <td>
            <div class="user-info">
              <div>
                {{ $t('orders.body.id') }} :
                <span>{{ searchedOrder.qr_number }}</span>
              </div>
              <div>
                {{ $t('orders.body.name') }}:
                <span>{{ searchedOrder.full_name }}</span>
              </div>
              <div>
                {{ $t('orders.body.faculty') }}:
                <span>{{ searchedOrder.faculty }}</span>
              </div>
              <div>
                {{ $t('orders.body.course') }}:
                <span>{{ searchedOrder.course }}</span>
              </div>
            </div>
          </td>
          <td>
            <div class="order-books">
              <img :src="`https://libro.pythonanywhere.com/` + searchedOrder.img" alt="Order books" />
            </div>
          </td>
          <td>
            <div class="order-name">{{ searchedOrder.title }}</div>
          </td>
          <td>
            <div class="order-book-isbn">{{ searchedOrder.isbn }}</div>
          </td>
          <td>
            <div class="order-date_pub">{{ searchedOrder.date_pub }}</div>
          </td>
          <td>
            <div class="order-author">{{ searchedOrder.author }}</div>
          </td>
          <td>
            <div class="order-udc">{{ searchedOrder.udc }}</div>
          </td>
          <td>
            <div class="order-remained_time">{{ searchedOrder.remained_time }}</div>
          </td>
          <td>
            <div></div>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'
import NProgress from 'nprogress'
export default {
  data() {
    return {
      search: '',
      timeout: null
    }
  },
  mounted() {
    this.timeout = setInterval(() => store.dispatch('book/fetchBooks'), 5000)
    this.timeout = setInterval(() => store.dispatch('user/fetchUsers'), 5000)
    this.timeout = setInterval(() => store.dispatch('order/fetchOrders'), 5000)
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    NProgress.start()
    store.dispatch('book/fetchBooks')
    store.dispatch('user/fetchUsers')
    store.dispatch('order/fetchOrders').then(() => {
      NProgress.done()
      next()
    })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    NProgress.start()
    store.dispatch('book/fetchBooks')
    store.dispatch('user/fetchUsers')
    store.dispatch('order/fetchOrders').then(() => {
      NProgress.done()
      next()
    })
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  computed: {
    ...mapState(['order', 'orders', 'user', 'users', 'book', 'books']),
    filledOrders() {
      return this.order.orders.map(order => {
        const book = this.book.books.find(book => order.book_id === book.id)
        const user = this.user.users.find(user => order.user === user.id)
        const remained_time =
          ((Math.round(Date.parse(order.time_of_order) - Date.now()) %
            86400000) %
            3600000) /
          60000
        return { ...order, ...book, ...user, remained_time }
      })
    },
    searchedOrders() {
      return this.filledOrders.filter(data => {
        let full_name = data.full_name
          .toLowerCase()
          .match(this.search.toLowerCase())
        return full_name
      })
    }
  }
}
</script>
