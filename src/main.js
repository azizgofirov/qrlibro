import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import 'nprogress/nprogress.css'
import DateFilter from './filters/date'
import VueCarousel from 'vue-carousel'
import i18n from './i18n'

Vue.filter('date', DateFilter)
Vue.use(VueCarousel)

Vue.config.productionTip = false

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
