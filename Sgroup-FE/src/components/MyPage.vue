<template>
  <div class="bg-gray-100 flex justify-center items-center h-screen">
    <div class="text-center">
        <img src="src/images/logo.jpg" alt="S-group Logo" class="mx-auto mb-6 w-[50%] h-full">
        <h1 class="text-3xl font-semibold text-gray-800 mb-4 pb-5">Quản lý thành viên S-Group</h1>
        <div class="space-x-4">
            <router-link to="/register" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">Sign up</router-link>
            <router-link to="/login" class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">Login</router-link>
            <router-link to="/" class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">Home</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    setup() {
  
  },
  data(){
  },
}
</script>

