import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "product" */ '../views/Products.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../components/Register.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/thankyou',
    name: 'Thankyou',
    component: () => import(/* webpackChunkName: "thankyou" */ '../components/Thankyou.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
  },
  {
    path: '/details/:productID',
    name: 'Details',
    component: () => import(/* webpackChunkName: "details" */ '../components/Details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
