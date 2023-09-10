<template>
    <div  class="p-10">
<div class="flex justify-between items-center">
    <input
    class="border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 p-2" placeholder="Find User" v-model="searchText">
    <button  @click ="toUserDetail" class=" p-2 font-bold text-xl bg-green-400 text-white rounded-md mr-14">
        Create New
    </button>
</div>

<div class="w-full">
    <div class="mt-10 w-full pr-10 ">
    <table class="text-xs text-gray-700 py-4 bg-white px-15 flex ">
      <thead class="">
            <th
              v-for="(column,index) in tableColumns"
              :key="index"
              class="uppercase pl-[30px] pr-[165px] "
            >
              {{ column }}
            </th>
          </thead>
    </table>
    <div  v-for="(user) in filteredUsers" :key="user.id" class="border-b-2">
        <UserCard :user="user" class="w-full" @showPopup="showPopup" @onDelete="onDelete"/>
    </div>
</div>
</div>
</div>

</template>

<script>
import UserCard from './UserCard.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: {
      UserCard
  },
  setup() {
    const users = ref([]);
    const router = useRouter();
    const url = `http://localhost:3009/users/`;
    const fetchData = async () => {
      try {
        // const pageNumber = router.query.query || 1;
      // const PAGE_SIZE = router.query.paging || 10;

        const response = await axios.get(url, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem('accessToken'))
          }
        })
        if(response) {
          users.value = response.data;
          console.log(users.value);
        }
      } catch(error) {
            console.error(error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
            
        if (error.response.status === 401) {
            localStorage.removeItem('accessToken');
            router.push('/login');
            }
          }
      }
    };
    
    onMounted(() => {
      fetchData();
    });

    return {
      users
    };
  },
  data(){
      return{
          searchText: "",
          tableColumns: [
              "user",
              "role",
              "status",
              "last activity",
              "join date",
              "actions",
            ],
      }
  },
  props: {
      users: Array,
       
  },
  computed:{
    filteredUsers() {
      if (!this.searchText) {
        return this.users; 
      }
      const searchTextLower = this.searchText.toLowerCase();
      return this.users.filter(user =>
        user.name.toLowerCase().includes(searchTextLower)
      );
    },
  },
  methods: {
    clickOutSide(){
        console.log('oke')
        this.users.forEach(u => u.isHidden = 'hidden')
      },
    closeAllPopup(idToExclude) {
      this.users.forEach(u => {
        if (u.id !== idToExclude) {
          u.isHidden = 'hidden';
        }
      });
    },
      showPopup(id) {
      console.log('click');
      console.log(id);
      this.closeAllPopup(id);
      const user = this.users.find(u => u.id === id);
      if (user) {
        user.isHidden = user.isHidden === 'hidden' ? 'block' : 'hidden';
      }
    },
    onDelete(id) {
            this.$emit('deleteUser', id);
            this.closeAllPopup();
        },

    beforeMount(){
        try{
            const token = JSON.parse(localStorage.getItem('accessToken'));
        }
        catch(e) {
            console.log(e.message)
            localStorage.removeItem('accessToken');
            this.$router.push('/login');
        }

    },
    toUserDetail() {
        this.$router.push({path:`/users-detail/${this.id}`});
    }
    
    

  },

}
</script>