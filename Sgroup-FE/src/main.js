import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'
import router from './router/index.js'
import {createPinia} from 'pinia'
import './axios'

const pinia = createPinia()
const app = createApp(App);
app.use(Notifications)
app.use(router)
app.use(pinia)
app.mount('#app');
