import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import BookShow from '@/views/BookShow.vue'
import BookList from '@/views/BookList.vue'
import BookManage from '@/views/BookManage.vue'
import OrderList from '@/views/OrderList.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue'
import NProgress from 'nprogress'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/book-list'
  },
  {
    path: '/book-show/:id',
    name: 'book-show',
    component: BookShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('book/fetchBook', routeTo.params.id).then(book => {
        routeTo.params.book = book
        next()
      })
    }
  },
  {
    path: '/book-list',
    name: 'book-list',
    component: BookList
  },
  {
    path: '/book-manage',
    name: 'book-manage',
    component: BookManage
  },
  {
    path: '/order-list',
    name: 'order-list',
    component: OrderList
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    redirect: { name: '404' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
