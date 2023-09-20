import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/FormLogin.vue'
import Signup from '@/components/FormRegister.vue'
import MainPage from '@/components/MainPage.vue'
import Update from '@/components/FormUpdate.vue'
import Counter from '@/components/Counter.vue'
import LoginPinia from '@/pages/Login.vue'
import Home from '@/components/MyPage.vue'
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
    path: '/loginPinia',
    name: 'Pinia',
    component: LoginPinia
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

// router.beforeEach((to, from) => {
//   console.log(to)
// })

export default router
