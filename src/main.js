import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './extras/store'

import './assets/images/aguila.png'
import './assets/css/flexboxgrid.min.css'
import './assets/css/flexboxgrid-helpers.min.css'
import './assets/css/global.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false

Vue.use(VueSweetalert2, {
  confirmButtonColor: '#1fb46a'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
