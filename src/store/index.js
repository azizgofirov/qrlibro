import Vue from 'vue'
import Vuex from 'vuex'
import * as book from '@/store/modules/book.js'
import * as order from '@/store/modules/order.js'
import * as user from '@/store/modules/user.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book,
    order,
    user
  },
  state: {
    options: ['Ru', 'En', 'Uz']
  }
})
