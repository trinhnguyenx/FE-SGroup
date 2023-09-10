<template>
    <div class="h-[100vh] bg-gray-700 fixed z-20">
        <div class="h-full relative w-[180px] p-5 text-white flex flex-col gap-6">
            <div class="text-xl">Dash board</div>
            <div class="text-xs flex flex-col gap-5">
                <div class="flex flex-col gap-5">Dash board
                    
                </div>
                <div class="flex flex-col gap-5">
                    <div>
                        Role

                    </div>
                    
                </div>
                <div class="flex flex-col gap-5">Permission
                    
                </div>
                <div class="flex flex-col gap-5 w-full">
                    <div class="flex justify-between items-center w-full">
                        <div>User Management</div>
                        <button @click="dropdown(1)">
                            <img src="../icon/drop.svg" alt="">
                        </button>
                    </div>
                    <div id="1" class="flex flex-col gap-6">
                        <router-link :to="{path: '/user-detail/:`${id}`'}" class="px-3">User Details</router-link>
                        <router-link :to="{path: '/'}" class="px-3">User List</router-link>
                    </div>
                </div>
            </div>
            <button class="absolute left-0 bottom-0 text-white p-5" @click="logout()">Logout</button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            
        }
    },
    methods: {
        dropdown(id){
            document.getElementById(id).classList.toggle('hidden')
        },
        logout() {
            localStorage.removeItem('accessToken');
            this.$router.push('/login')
        },
    }
}
</script>