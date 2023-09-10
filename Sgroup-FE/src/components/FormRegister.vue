

<template>
  <div class="w-full h-screen flex items-center justify-around bg-gray-100 ">
    <!--  -->
    <div class="hidden" >
      <div class="text-white text-center">
  <h1 class="text-4xl font-semibold mb-4 text-blue-700">Welcome</h1>
  <p class="text-lg mb-8 text-blue-400">Loading...</p>
  <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500 border-solid mx-auto"></div>
</div>
    </div>

    <!--  -->
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h2 class="text-2xl font-semibold mb-4 flex ">Registration Form</h2>
      <form>
        <!-- <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input v-model="username" type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded-md">
        </div> -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="password" type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md">
        </div>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input v-model="name" type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-md">
        </div>
        <!-- <div class="mb-4">
          <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
          <input v-model="age" type="number" id="age" name="age" class="mt-1 p-2 w-full border rounded-md">
        </div> -->
        
        <!-- <div class="mb-4">
          <label for="gender" class="block text-sm font-medium text-gray-700">Gender</label>
          <select  v-model="gender" id="gender" name="gender" class="mt-1 p-2 w-full border rounded-md">
            <option value="true">Male</option>
            <option value="false">FeMale</option>
          </select>
        </div> -->
        <button @click.prevent ="register" type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Register</button>
        <button @click.prevent ="toLogin" type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-[150px]">Login</button>
      </form>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue';
import axios from 'axios'; 
import { notify } from "@kyvg/vue3-notification";
import { useRouter } from 'vue-router'
export default {
setup() {
  const password = ref('');
  const email = ref('');
  const name = ref('');
  const router = useRouter()

  const register = () => {
    axios
      .post('http://localhost:3009/auth/register', {

        password: password.value,
        email: email.value,
        name: name.value,
      })
      .then((response) => {
        if(response.status === 201){
          console.log(response.data);
          notify({
            title: 'Success',
            text: 'Register successful!',
            type: 'success',
          });
        }
      })
      .catch((error) => console.log(error));
  };


  return {
    password,
    email,
    name,
    register,
  };
  
},
data() {
  return {
    users: [],
  }
},
methods: {
  HandleLogin() {

  },
  toLogin(){
            this.$router.push({path: '/login'});
        },
 

},
};

</script>

