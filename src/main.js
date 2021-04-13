import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/images/aguila.png'
import './assets/css/flexboxgrid.min.css'
import './assets/css/flexboxgrid-helpers.min.css'
import './assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
