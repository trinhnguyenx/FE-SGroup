import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/FormLogin.vue'
import Signup from '@/components/FormRegister.vue'
import MainPage from '@/components/MainPage.vue'
import UserDetail from '@/components/UserDetail.vue'
import Counter from '@/components/Counter.vue'
import LoginPinia from '@/pages/Login.vue'
import Home from '@/components/MyPage.vue'


const routes = [
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
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/users-detail/:id',
    name: 'UserDetail',
    component: UserDetail
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
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from) => {
//   console.log(to)
// })

export default router
