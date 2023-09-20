<template>
    <div class="flex w-full">
        <SideBar class="w-[200px]"/>
        <div class="w-full pl-[200px]">
            <NavBar />
            <div id="app" class="p-4 flex flex-col gap-4">
                <p class="font-bold">Account Details</p>
                <div class="flex gap-3">
                    <img :src="src" class="max-w-[70px] rounded-lg aspect-square">
                    <div class="">
                        <button @click="openFileInput" class="bg-green-500 text-white p-2 rounded-md font-semibold">
                            Upload new photo
                        </button>
                        <input
                            ref="fileInput"
                            type="file"
                            accept="image/*"
                            style="display: none;"
                            @change="handleFileChange"
                        />
                        <div class="text-base font-normal">
                            Allowed JPG, GIF or PNG. Max size of 800K
                        </div>
                    </div>
                </div>
                <hr>
                <div class="flex flex-col gap-3">
                    <input  v-model="email" type="text" class="border-2 px-6 py-3 rounded-md" placeholder="Email">
                    <input  v-model="name"  type="text" class="border-2 px-6 py-3 rounded-md" placeholder="Name">
                    <input  v-model="age"   type="text" class="border-2 px-6 py-3 rounded-md" placeholder="Age">
                    <div class="border-2 rounded-md px-6 py-4">
                        <div class="flex justify-between">
                            <div>Male</div>
                            <input type="radio" value="HTML" >
                        </div>
                        <br>
                        <div class="flex justify-between">
                            <div for="css">Female</div>
                            <input type="radio" value="CSS">
                        </div>
                        <br>
                        <div class="flex justify-between">
                            <div for="javascript">Apache Helikopter</div>
                            <input type="radio" value="JavaScript">
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
        const router = useRouter()
        const route = useRoute();
        const email= ref('');
        const name= ref('');
        const age = ref('');
        const currentDate = ref(new Date().now);
        const id = route.params.id;
        console.log(id);
        const update = async () => {
            try {
                const response = await axios.put(`/auth/update/${id}`, {
                email: email.value,
                name: name.value,
                age: age.value,
                updated_at: currentDate.value,
            }, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
                },  
            });
            if(response.status === 201) {
                notify({
                    type: "success",
                    title: "Success",
                    text: "Update user successfully"
                });
                return response.data.data;
            }
            } catch(error) {
                console.log(error)
                notify({
                    type: "error",
                    title: "Error",
                    text: "Update user failed"
                });
            }
           
        }
        return {
            email,
            name,   
            age,
            currentDate,
            update,
        }   
    },
    data() {
        return {
           src: null,
           fileInput: null,
        };        
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
        },
        openFileInput() {
        // Khi người dùng nhấn nút "Upload new photo", kích hoạt thẻ input ẩn
        this.$refs.fileInput.click();
        },
        handleFileChange(event) {
        // Xử lý sự kiện khi người dùng chọn một tệp ảnh
        this.fileInput = event.target.files[0];
        this.$emit('input',this.fileInput);
        let reader = new FileReader();
        reader.readAsDataURL(this.fileInput);
        reader.onload = (e) => {
            this.src = e.target.result;
        };

    },

    },
}
</script>