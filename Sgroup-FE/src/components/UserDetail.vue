<template>
    <div class="flex w-full">
        <SideBar class="w-[200px]"/>
        <div class="w-full pl-[200px]">
            <NavBar />
            <div id="app" class="p-4 flex flex-col gap-4">
                <p class="font-bold">Account Details</p>
                <div class="flex gap-3">
                    <img src="https://i.pravatar.cc/300" class="max-w-[70px] rounded-lg aspect-square">
                    <div class="">
                        <button class="bg-green-500 text-white p-2 rounded-md font-semibold">
                            Upload new photo
                        </button>
                        <div class="text-base font-normal">
                            Allowed JPG, GIF or PNG. Max size of 800K
                        </div>
                    </div>
                </div>
                <hr>
                <div class="flex flex-col gap-3">
                    <input  v-model="emailupdate" type="text" class="border-2 px-6 py-3 rounded-md" placeholder="Email">
                    <input  v-model="nameupdate"  type="text" class="border-2 px-6 py-3 rounded-md" placeholder="Name">
                    <input  v-model="ageupdate"   type="text" class="border-2 px-6 py-3 rounded-md" placeholder="Age">
                    <div class="border-2 rounded-md px-6 py-4">
                        <div class="flex justify-between">
                            <div>Male</div>
                            <input type="radio" id="html" name="fav_language" value="HTML" >
                        </div>
                        <br>
                        <div class="flex justify-between">
                            <div for="css">Female</div>
                            <input type="radio" id="css" name="fav_language" value="CSS">
                        </div>
                        <br>
                        <div class="flex justify-between">
                            <div for="javascript">Apache Helikopter</div>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                        </div>
                    </div>
                </div>
                <div class="flex gap-4">
                    <button @click="update" class="bg-green-500 text-white p-2 rounded-md font-semibold">SAVE CHANGES</button>
                    <button @click="submitForm" class="bg-gray-500 text-white p-2 rounded-md font-semibold">RESET</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import SideBar from '../layouts/SideBar.vue';
import NavBar from '../layouts/NavBar.vue';
import { useRouter,useRoute } from 'vue-router'
import { notify } from "@kyvg/vue3-notification";

export default {
    setup () {
        const router = useRouter();
        // const route = useRoute();
        const emailupdate = ref('');
        const nameupdate = ref('');
        const ageupdate = ref('');
        // const idFromRoute = route.params.id;
        const id = localStorage.getItem('userId');
        console.log(id)

            // if (!id && idFromRoute) {
            //     // Nếu không có ID trong localStorage nhưng có từ route, hãy lưu nó vào localStorage
            //     localStorage.setItem('userId', idFromRoute);
            // }

        const update = async () => {
            const response = await axios.put(`http://localhost:3009/auth/${id}`, {
                email: emailupdate.value,
                name: nameupdate.value,
                age: ageupdate.value
            })
            console.log(response);
            if(response.status === 201) {
                notify({
                    type: "success",
                    title: "Success",
                    text: "Update user successfully"
                });
                // router.push('/users');
            } else {
                notify({
                    type: "error",
                    title: "Error",
                    text: "Update user failed"
                });
            }
        }
        return {
            emailupdate,
            nameupdate,
            ageupdate,
            update,
            id
        }   
    },
    data(){
      
    },
    components: {
        SideBar,
        NavBar
    },
    methods: {
        submitForm() {
            this.nameupdate = '';
            this.emailupdate = '';
            this.ageupdate = '';
        }
    },
    // mounted() {
    //     console.log("ok user");
    //     console.log(this.$router)
    //     this.id = this.$router.params.id;
    //     console.log(this.id)
    //     axios({
    //         method: 'get',
    //         url: `http://localhost:3009/users/${this.id}`
    //     })
    //     .then((response) => {
    //         console.log(response);
    //         this.user = response.data[0];
    //         console.log(this.user)
    //         document.getElementById('name').value = this.user.name;
    //         document.getElementById('email').value = this.user.email;
    //         document.getElementById('age').value = this.user.age;
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }
}
</script>