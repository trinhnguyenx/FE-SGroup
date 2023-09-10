import { defineStore } from 'pinia';
import axios from 'axios'; 
import { notify } from "@kyvg/vue3-notification";
import { ref } from 'vue';


export const useLoginStore = defineStore('authLogin',  {
  state: () => ({
    email: '',
    password: '',
    accessToken: localStorage.getItem('accessToken') || '',
  }),
  actions: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3009/auth/login', {
          email: this.email,
          password: this.password,
        });

        if (response.data.data.token) {
          this.accessToken = response.data.data.token;

          localStorage.setItem('accessToken', JSON.stringify(response.data.data.token));

          notify({
            title: 'Welcome Back',
            text: 'Hello ' + response.data.data.user.name,
            type: 'success',
          });

          this.$router.push({ path: '/' });

          return response.data;
        }
      } catch (error) {
        notify({
          title: 'Failed',
          text: 'Username or Password is incorrect',
          type: 'error',
        });

        console.log(error);
      }
    },
    logout() {
      this.accessToken = '';
      localStorage.removeItem('accessToken');
    },
     toSignup(){
      this.$router.push({ path: '/register' });
    },
  },
});
