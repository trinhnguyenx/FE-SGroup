
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

export default {
    setup() {
  
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