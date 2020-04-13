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
    <div class="card -shadow">
      <table>
        <thead>
          <tr>
            <th>{{ $t('orders.headers.number') }}</th>
            <th>{{ $t('orders.headers.avatar') }}</th>
            <th>{{ $t('orders.headers.user-info') }}</th>
            <th>{{ $t('orders.headers.ordered-books') }}</th>
            <th>{{ $t('orders.headers.book-name') }}</th>
            <th>{{ $t('orders.headers.date-of-pub') }}</th>
            <th>{{ $t('orders.headers.author') }}</th>
            <th>{{ $t('orders.headers.category') }}</th>
            <th>{{ $t('orders.headers.quantity') }}</th>
            <th>{{ $t('orders.headers.remained-time') }}</th>
            <th>{{ $t('orders.headers.took') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in filteredOrders" :key="index">
            <td>
              <div class="order-id">{{ order.id }}</div>
            </td>
            <td>
              <div class="user-avatar">
                <img :src="order.uavatar" alt="Avatar" />
              </div>
            </td>
            <td>
              <div class="user-info">
                <div>
                  {{ $t('orders.body.id') }} :
                  <span>{{ order.user_info.uid }}</span>
                </div>
                <div>
                  {{ $t('orders.body.name') }}:
                  <span>{{ order.user_info.uname }}</span>
                </div>
                <div>
                  {{ $t('orders.body.faculty') }}:
                  <span>{{ order.user_info.ufaculty }}</span>
                </div>
                <div>
                  {{ $t('orders.body.course') }}:
                  <span>{{ order.user_info.ucourse }}</span>
                </div>
              </div>
            </td>
            <td>
              <div class="order-books">
                <img :src="order.books" alt="Books" />
              </div>
            </td>
            <td>
              <div class="order-name">{{ order.book_name }}</div>
            </td>
            <td>
              <div class="order-name">{{ order.date_of_pub }}</div>
            </td>
            <td>
              <div class="order-author">{{ order.book_author }}</div>
            </td>
            <td>
              <div class="order-author">{{ order.book_category }}</div>
            </td>
            <td>
              <div class="order-quantity">{{ order.book_quantity }}</div>
            </td>
            <td>
              <div class="order-remained_time">{{ order.remained_time }}</div>
            </td>
            <td>
              <div class="order-took">
                <img :src="order.took" alt="Took" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import ApiService from '../services/ApiService'
export default {
  data() {
    return {
      orders: [],
      search: ''
    }
  },
  created() {
    ApiService.getOrders()
      .then(response => {
        this.orders = response.data
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  computed: {
    filteredOrders() {
      return this.orders.filter(data => {
        let id = data.id.toLowerCase().match(this.search.toLowerCase())
        let uid = data.user_info.uid
          .toLowerCase()
          .match(this.search.toLowerCase())
        let uname = data.user_info.uname
          .toLowerCase()
          .match(this.search.toLowerCase())
        let ucourse = data.user_info.ucourse
          .toLowerCase()
          .match(this.search.toLowerCase())
        let ufaculty = data.user_info.ufaculty
          .toLowerCase()
          .match(this.search.toLowerCase())
        let book_name = data.book_name
          .toLowerCase()
          .match(this.search.toLowerCase())
        let book_author = data.book_author
          .toLowerCase()
          .match(this.search.toLowerCase())
        let book_quantity = data.book_quantity
          .toLowerCase()
          .match(this.search.toLowerCase())
        return (
          id ||
          uname ||
          uid ||
          ucourse ||
          ufaculty ||
          book_name ||
          book_author ||
          book_quantity
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card:hover {
  transform: scale(1);
}
table {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #292727;
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
