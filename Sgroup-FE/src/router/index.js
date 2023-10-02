import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/FormLogin.vue'
import Signup from '@/views/auth/FormRegister.vue'
import MainPage from '@/views/MainPage.vue'
import Update from '@/views/auth/FormUpdate.vue'
import Counter from '@/components/Counter.vue'
import Home from '@/views/dashboard/Mypage.vue'
import UserPage from '@/components/UserPage.vue'


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
    path: '/register',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/mainpage',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/users-edit/:id',
    name: 'Update',
    component: Update
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/userpage',
    name: 'UserPage',
    component: UserPage 
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
