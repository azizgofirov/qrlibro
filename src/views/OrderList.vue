<template>
  <section class="section-fluid">
    <div class="form">
      <label>
        <BaseIcon name="search" width="30" height="30" />
        <input
          class="-shadow"
          type="search"
          v-model="search"
          :placeholder="$t('search')"
        />
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
        <tbody>
          <!--          <tr v-for="(order, index) in filteredOrders" :key="index">-->
          <!--            <td>-->
          <!--              <div class="order-id">{{ order.id }}</div>-->
          <!--            </td>-->
          <!--            <td>-->
          <!--              <div class="user-avatar">-->
          <!--                <img :src="order.uavatar" alt="Avatar" />-->
          <!--              </div>-->
          <!--            </td>-->
          <!--            <td>-->
          <!--              <div class="user-info">-->
          <!--                <div>-->
          <!--                  {{ $t('orders.body.id') }} :-->
          <!--                  <span>{{ order.user_info.uid }}</span>-->
          <!--                </div>-->
          <!--                <div>-->
          <!--                  {{ $t('orders.body.name') }}:-->
          <!--                  <span>{{ order.user_info.uname }}</span>-->
          <!--                </div>-->
          <!--                <div>-->
          <!--                  {{ $t('orders.body.faculty') }}:-->
          <!--                  <span>{{ order.user_info.ufaculty }}</span>-->
          <!--                </div>-->
          <!--                <div>-->
          <!--                  {{ $t('orders.body.course') }}:-->
          <!--                  <span>{{ order.user_info.ucourse }}</span>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </td>-->
          <!--            <td>-->
          <!--              <div class="order-books">-->
          <!--                <img :src="order.books" alt="Books" />-->
          <!--              </div>-->
          <!--            </td>-->
          <!--            <td>-->
          <!--              <div class="order-name">{{ order.book_name }}</div>-->
          <!--            </td>-->
          <!--            <td>-->
          <!--              <div class="order-date_of_pub">{{ order.date_of_pub }}</div>-->
          <!--            </td>-->
          <!--            <td>-->
          <!--              <div class="order-author">{{ order.book_author }}</div>-->
          <!--            </td>-->
          <!--            <td>-->
          <!--              <div class="order-author">{{ order.book_category }}</div>-->
          <!--            </td>-->
          <!--            <td>-->
          <!--              <div class="order-quantity">{{ order.book_quantity }}</div>-->
          <!--            </td>-->
          <!--            <td>-->
          <!--              <div class="order-remained_time">{{ order.remained_time }}</div>-->
          <!--            </td>-->
          <!--            <td>-->
          <!--              <div class="order-took">-->
          <!--                <img :src="order.took" alt="Took" />-->
          <!--              </div>-->
          <!--            </td>-->
          <!--          </tr>-->
        </tbody>
        <tr v-for="(filledOrder, index) in filledOrders" :key="index">
          <td>
            <div class="order-id">
              {{ index + 1 }}
            </div>
          </td>
          <td>
            <div class="user-avatar">
              <img
                :src="`https://libro.pythonanywhere.com/` + filledOrder.Аватар"
                alt=""
              />
            </div>
          </td>
          <td>
            <div class="user-info">
              <div>
                {{ $t('orders.body.id') }} :
                <span>{{ filledOrder.qr_number }}</span>
              </div>
              <div>
                {{ $t('orders.body.name') }}:
                <span>{{ filledOrder.full_name }}</span>
              </div>
              <div>
                {{ $t('orders.body.faculty') }}:
                <span>{{ filledOrder.faculty }}</span>
              </div>
              <div>
                {{ $t('orders.body.course') }}:
                <span>{{ filledOrder.course }}</span>
              </div>
            </div>
          </td>
          <td>
            <div class="order-books">
              <img
                :src="`https://libro.pythonanywhere.com/` + filledOrder.img"
                alt=""
              />
            </div>
          </td>
          <td>
            <div class="order-name">
              {{ filledOrder.title }}
            </div>
          </td>
          <td>
            <div class="order-book-isbn">
              {{ filledOrder.isbn }}
            </div>
          </td>
          <td>
            <div class="order-date_pub">
              {{ filledOrder.date_pub }}
            </div>
          </td>
          <td>
            <div class="order-author">
              {{ filledOrder.author }}
            </div>
          </td>
          <td>
            <div class="order-udc">
              {{ filledOrder.udc }}
            </div>
          </td>
          <td>
            <div class="order-remained_time">
              {{ now }}
            </div>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      search: ''
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    store.dispatch('book/fetchBooks')
    store.dispatch('user/fetchUsers')
    store.dispatch('order/fetchOrders').then(() => {
      next()
    })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    store.dispatch('book/fetchBooks')
    store.dispatch('user/fetchUsers')
    store.dispatch('order/fetchOrders').then(() => {
      next()
    })
  },
  computed: {
    ...mapState(['order', 'orders', 'user', 'users', 'book', 'books']),
    filledOrders() {
      return this.order.orders.map(order => {
        const book = this.book.books.find(book => order.book_id === book.id)
        const user = this.user.users.find(user => order.user === user.id)
        return { ...order, ...book, ...user }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card:hover {
  transform: scale(1);
}
th {
  border-bottom: 1px solid black;
}
td {
  padding-top: 5px;
  padding-left: 5px;
}
.order-id {
  width: 15px;
  text-align: center;
}
.user-avatar {
  width: 72px;
  height: 72px;
}
.user-info {
  text-align: left;
  font-weight: bold;
  padding-left: 5px;
  width: 300px;
  span {
    font-weight: normal;
  }
}
.order-books {
  width: 72px;
}
.order-name {
}
.order-author {
}
.order-quantity {
}
.order-remained_time {
  letter-spacing: 3px;
}
.order-took {
  padding-right: 5px;
  width: 36px;
  height: 36px;
}
</style>
