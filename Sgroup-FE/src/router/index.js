import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/FormLogin.vue'
import Signup from '@/components/FormRegister.vue'
import HeaderPage from '@/components/HeaderPage.vue'
import UserDetail from '@/components/UserDetail.vue'
import Counter from '@/components/Counter.vue'
import LoginPinia from '@/pages/Login.vue'

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
    name: 'HeaderPage',
    component: HeaderPage
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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  console.log(to)
  if (to.name !== 'Login' && !localStorage.getItem('accessToken') && to.name !== 'Signup') return '/login'
  if (to.name === 'Login' && localStorage.getItem('accessToken')) return '/'
})

export default router
