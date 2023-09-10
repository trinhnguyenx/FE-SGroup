

<template>
  <div class="w-full h-screen flex items-center justify-around bg-gray-100 ">
    <div class="bg-white p-8 rounded-md shadow-md w-96  ">
      <div class="text-center text-xl mb-6">Sign in to your dashboard</div>
      <div class="border-[1px] rounded-md p-2 flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
        </svg>
        <input v-model="email" placeholder="Email" type="text" class="w-full outline-none">
      </div>

      <div class="border-[1px] rounded-md p-2 flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-lock" viewBox="0 0 16 16">
              <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z"/>
              <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
      </svg>
        <input v-model="password" placeholder="Password" type="password" class="w-full outline-none">
      </div>

      <div class="flex items-center gap-12">
          <div class=" mb-4">
        <input type="checkbox" id="remember" class="mr-2">
        <label for="remember">Remember me</label>
      </div>

      <div class="text-center mb-4 ml-5">
        <button class="text-blue-500 hover:underline">Forgot password?</button>
      </div>
      </div>

      <button @click="login()" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Sign In</button>
      <div class="flex items-center gap-2">
          <div>Not registered yet? </div>
      <div>
        <button href="#" class="text-blue-500 hover:underline" @click="toSignup()"> Create an account</button>
      </div>
      </div>
    </div>
    <!--  -->
    <!-- <button @click="logout">Logout</button> -->
  </div>

</template>

<script>
import { useLoginStore } from '@/store/login';

export default {
setup() {
  const authLogin = useLoginStore();

  const login = async () => {
    await authLogin.login();
  };
  const toSignup = async () => {
    await authLogin.toSignup();
  };
  const logout = async () => {
    await authLogin.logout();
  };

  return {
    email: authLogin.email,
    password: authLogin.password,
    login,
    toSignup,
    logout,
  };
},
};

</script>

