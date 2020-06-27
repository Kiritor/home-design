import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'
import Person from '../views/footer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/person',
    name: 'person',
    component: Person,
    meta: {
      title: '个人中心'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
