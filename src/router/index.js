import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import OnekeyLogin from '../views/OnekeyLogin.vue'
import ForgetPsd from '../views/ForgetPsd.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:'/',
    redirect: '/login'
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/onekeylogin',
    name: 'onekeylogin',
    component: OnekeyLogin
  },
  {
    path: '/forgetpsd',
    name: 'forgetpsd',
    component: ForgetPsd
  },
]

const router = new VueRouter({
  routes
})

export default router
