<template>
    <div  class="w-full flex items-center space-x-4 z-1000">
      <div class="flex items-center p-4 space-x-4 w-1/6">
        <img class="w-10 h-10 rounded-full" :src="avatar" alt="avatar" />
        <div class="flex flex-col ">
          <div class="text-sm font-medium ">{{ user.name }}</div>
          <div class="text-xs font-normal text-gray-500">{{ user.email }}</div>
        </div>
      </div>
      <div class="flex justify-around w-full ">
        <div class="text-xs font-normal uppercase flex justify-center items-center ml-10 ">{{ user.role }}</div>
        <div  :class="this.status ? 'bg-green-500':'bg-red-500'"
        class="text-xs font-normal py-2 px-3 rounded-md  flex items-center justify-center text-white ">{{ status }}</div>
        <div class="text-xs font-normal  items-center flex justify-center">{{ lastActivity }}</div>
        <div class="text-xs font-normal  items-center flex justify-center">{{ new Date(user.created_at).toLocaleDateString()}}</div>
      </div>
      <div class="relative ">
        <button
          type="button"
          @click.prevent="showPopup(user.id)"
          class="inline-flex items-center justify-center px-2 py-2 text-sm font-medium text-white rounded-md bg-gray-500 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Actions
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div
        v-if="user.isHidden === 'block'"
          :id="'action-' + user.id"
          :class="['popup  absolute right-0 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50',]"
          
        >
          <button
            class="popup hover:bg-gray-400 hover:text-white text-gray-900 group flex items-center w-full px-2 py-2 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="popup w-5 h-5 mr-2 text-violet-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
            Edit
            
          </button>
          <button
          @click="Delete"
            class="popup hover:bg-red-400 hover:text-white text-gray-900 group flex items-center w-full px-2 py-2 text-sm"          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="popup w-5 h-5 mr-2 text-violet-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  </template>
  

<script>
import { notify } from "@kyvg/vue3-notification";
import axios from 'axios';

export default {
    // setup() {
    //   const id = user.id;
    //   console.log(id)
    //   const Delete = async () => {
    //     response = await axios.delete(`/auth/${id}`);
    //     if(response.status === 201) {
    //       notify({
    //         title: 'Success',
    //         text: 'Delete user successfully',
    //         type: 'success'
    //       });
    //     } else {
    //             notify({
    //                 type: "error",
    //                 title: "Error",
    //                 text: "Update user failed"
    //             });
    //         }
    //   }
    //   return {
    //     Delete
    //   }
    // },
    data(){
      return{
          status:"Active",
          lastActivity: "1 min ago",
          avatar: "https://i.pravatar.cc/300",
      }
  },
    props: {
        user: Object
    },
    methods: {
        autoClosePopup(e){
            if (e.target.classList.contains('popup')) return;
            this.$emit('closeAllPopup', 'idToExclude')
        },
        showPopup(id) {
            this.$emit('showPopup', id)
        },
    },
    computed: {
    },
}
</script>