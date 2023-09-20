<template>
  <div class="bg-gray-100">
    <div class="container mx-auto p-8">
        <h1 class="text-3xl font-semibold mb-4">Xin chào, <span id="username" class="text-blue-600"></span>!</h1>
        <p class="text-gray-700">Chào mừng bạn đến trang người dùng.</p>
        <button @click="logout" id="logoutButton" class="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Đăng xuất</button>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        logout() {
            localStorage.removeItem('accessToken');
            this.$router.push('/login')
        },
    },
}
</script>
