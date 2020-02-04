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
import Understand from '../views/Understand.vue'
import Classroom from '../views/Classroom.vue'
import Task from '../views/Task.vue'
import Find from '../views/Find.vue'
import Introduction from '../views/Introduction.vue'
import PhpRe from '../views/PhpRe.vue'
import CuSkille from '../views/CuSkille.vue'

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
  {
    path: '/understand',
    name: 'understand',
    component: Understand
  },
  {
    path: '/classroom',
    name: 'classroom',
    component: Classroom
  },
  {
    path: '/task',
    name: 'task',
    component: Task
  },
  {
    path: '/find',
    name: 'find',
    component: Find
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: Introduction
  },
  {
    path: '/phpre',
    name: 'phpre',
    component: PhpRe
  },
  {
    path: '/cuskille',
    name: 'cuskille',
    component: CuSkille
  },
]

const router = new VueRouter({
  routes
})

export default router
