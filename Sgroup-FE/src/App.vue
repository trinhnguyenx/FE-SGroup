
<template>
    <div id="app">
    <router-view></router-view>
      <notifications />    
    </div>
  </template>
  
  <script >
  import FormLogin from './components/FormLogin.vue'
  import FormRegister from './components/FormRegister.vue'
  import HeaderPage from './components/HeaderPage.vue'
  import UserList from './components/UserList.vue'
  import ForgotPassword from './components/ForgotPassword.vue'
  import UserDetail from './components/UserDetail.vue'
  import Counter from './components/Counter.vue'
  import Login from './pages/Login.vue'
  const tabs = [
  FormLogin,
  FormRegister,
  UserList,
]

  export default {
    name: 'App',
    components:{
      HeaderPage,
      FormLogin,
      FormRegister,
      UserList,
      ForgotPassword,
      UserDetail,
      Counter,
      Login,
    },
    
    data() {
    return {
      users: [],
    };
  },
    methods: {
    assignUserList(userList){
      this.users = userList
    },
    deleteUser(id){
      console.log(id)
      this.users = this.users.filter(u => u.id !== id)
      console.log(this.users)
    },
  },
};
  </script>
  <!-- 
    Sử dụng methods cho các hành động và logic xử lý sự kiện.
    Sử dụng computed cho tính toán dựa trên dữ liệu và theo dõi các giá trị phụ thuộc.
    Sử dụng mounted cho các tác vụ khởi tạo và tương tác với DOM sau khi component được gắn kết.
   -->