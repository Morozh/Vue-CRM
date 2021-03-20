import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
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
    path: '/',
    name: 'Home',
    meta: { layout: 'Main', auth: true },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'Main', auth: true },
    component: () => import(/* webpackChunkName: "categories" */ '../views/Categories.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: { layout: 'Main', auth: true },
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: { layout: 'Main', auth: true },
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: { layout: 'Main', auth: true },
    component: () => import(/* webpackChunkName: "planning" */ '../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'Main', auth: true },
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: { layout: 'Main', auth: true },
    component: () => import(/* webpackChunkName: "record" */ '../views/Record.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);

  if(requireAuth && !currentUser) {
    next('/login?message=login');
  } else {
    next();
  }
});

export default router
