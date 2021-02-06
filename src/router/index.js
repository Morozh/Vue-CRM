import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'Main' },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'Auth' },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'Auth' },
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'Main'},
    component: () => import(/* webpackChunkName: "categories" */ '../views/Categories.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: { layout: 'Main'},
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: { layout: 'Main'},
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: { layout: 'Main'},
    component: () => import(/* webpackChunkName: "planning" */ '../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'Main'},
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: { layout: 'Main'},
    component: () => import(/* webpackChunkName: "record" */ '../views/Record.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
