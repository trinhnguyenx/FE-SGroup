
<template>
  <div class="flex w-full ">
      <SideBar class="w-20%"/>
      <div class="w-full pl-[200px]">
          <NavBar />
          <UserList v-if="status === 'user'"/>
          <UserDetail v-if="status === 'user-detail'"/>
      </div>
  </div>

</template>

<script>
import UserList from './UserList.vue';
import NavBar from '../layouts/NavBar.vue';
import SideBar from '../layouts/SideBar.vue';
import UserDetail from './UserDetail.vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
    const router = useRouter();

    const goToUserDetail = (id) => {
      router.push({ name: 'UserDetail', params: { id } });
    }

    // ...các thứ khác

    return {
      // ...các biến và hàm khác
      goToUserDetail
    }
  },
  data(){
      return{
          status: 'user',
      }
  },
  components: {
      UserList,
      NavBar,
      SideBar,
      UserDetail
  }
}
</script>