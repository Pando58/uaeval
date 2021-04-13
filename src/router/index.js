import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PanelAdmin from '../views/PanelAdmin.vue'
import Cuestionario from '../views/Cuestionario.vue'
import NotFound from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/panel_admin',
    name: 'PanelAdmin',
    component: PanelAdmin
  },
  {
    path: '/cuestionario',
    name: 'Cuestionario',
    component: Cuestionario
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
