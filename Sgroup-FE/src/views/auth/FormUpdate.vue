<template>
  <div class="flex w-full">
    <SideBar class="w-[200px]" />
    <div class="w-full pl-[200px]">
      <NavBar />
      <div id="app" class="p-4 flex flex-col gap-4">
        <p class="font-bold">Account Details</p>
        <div class="flex gap-3">
          <Cloudimages  @sendData="getData"/>
          <div class="">
            <button
              @click="upload()"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
              Tải lên hình ảnh 
            </button>
            <input type="file" @change="onFileChange" />
            <div class="text-base font-normal">Allowed JPG, GIF or PNG. Max size of 800K</div>
          </div>
        </div>
        <hr />
        <div class="flex flex-col gap-3">
          <input
            v-model="email"
            type="text"
            class="border-2 px-6 py-3 rounded-md"
            placeholder="Email"
          />
          <input
            v-model="name"
            type="text"
            class="border-2 px-6 py-3 rounded-md"
            placeholder="Name"
          />
          <input
            v-model="age"
            type="text"
            class="border-2 px-6 py-3 rounded-md"
            placeholder="Age"
          />
          <div class="border-2 rounded-md px-6 py-4">
            <div class="flex justify-between">
              <div>Male</div>
              <input type="radio" value="HTML" />
            </div>
            <br />
            <div class="flex justify-between">
              <div for="css">Female</div>
              <input type="radio" value="CSS" />
            </div>
            <br />
            <div class="flex justify-between">
              <div for="javascript">Apache Helikopter</div>
              <input type="radio" value="JavaScript" />
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <button
            @click="update(this.pathImages)"
            class="bg-green-500 text-white p-2 rounded-md font-semibold"
          >
            SAVE CHANGES
          </button>
          <button @click="submitForm" class="bg-gray-500 text-white p-2 rounded-md font-semibold">
            RESET
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import SideBar from '../../layouts/SideBar.vue';
import NavBar from '../../layouts/NavBar.vue';
import Cloudimages from '../../components/Cloudimages.vue';
import { useRouter, useRoute } from 'vue-router';
import { notify } from '@kyvg/vue3-notification';
import { storage } from '../../firebase'
import { ref as refFireBase, uploadBytes } from "firebase/storage";

export default {

  name: 'App',
  components: {
    SideBar,
    NavBar,
    Cloudimages,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const email = ref('');
    const name = ref('');
    const age = ref('');
    const currentDate = ref(new Date().now);
    const id = route.params.id;

    const update = async (path) => {
      try {
        const response = await axios.put(
          `/auth/update/${id}`,
          {
            email: email.value,
            name: name.value,
            age: age.value,
            updated_at: currentDate.value,
            avatar:path,
          },
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`,
            },
          }
        );
        if (response.status === 201) {
          notify({
            type: 'success',
            title: 'Success',
            text: 'Update user successfully',
          });
          return response.data.data;
        }
      } catch (error) {
        console.log(error);
        notify({
          type: 'error',
          title: 'Error',
          text: 'Update user failed',
        });
      }
    };

    return {
      email,
      name,
      age,
      currentDate,
      update,
    };
  },
  data() {
    return {
      selectedFile: null,
      pathImages: ''
    };
  },
  props: {
    user: Object,
  },
  methods: {
    submitForm() {
      this.nameupdate = '';
      this.emailupdate = '';
      this.ageupdate = '';
      this.selectedFile = null;
    },
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    },
    upload() {
      if (this.selectedFile) {
        const storageRef = refFireBase(storage, `folder/${this.selectedFile.name}`);
        uploadBytes(storageRef, this.selectedFile).then(() => {
          console.log('Uploaded a blob or file!' + this.pathImages + "xxx");
          // Sau khi tải lên thành công, bạn có thể thực hiện các hành động khác ở đây
        });
      }
    },
    getData(data) {
      this.pathImages = data
    }
  },
};
</script>
