import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import OnekeyLogin from '../views/OnekeyLogin.vue'
import ForgetPsd from '../views/ForgetPsd.vue'
import RebuildPsd from '../views/RebuildPsd.vue'
import Nickname from '../views/Nickname.vue'
import Home from '../views/Home.vue'
import Serach from '../views/Serach.vue'
import Notice from '../views/Notice.vue'
import NewsDetails from '../views/NewsDetails.vue'

Vue.use(VueRouter)

const routes = [
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
    redirect: '/home'
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
  {
    path: '/rebuildpsd',
    name: 'rebuildpsd',
    component: RebuildPsd
  },
  {
    path: '/nickname',
    name: 'nickname',
    component: Nickname
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/serach',
    name: 'serach',
    component: Serach
  },
  {
    path: '/notice',
    name: 'notice',
    component: Notice
  },
  {
    path: '/newsdetails',
    name: 'newsdetails',
    component: NewsDetails
  },
]

const router = new VueRouter({
  routes
})

export default router
