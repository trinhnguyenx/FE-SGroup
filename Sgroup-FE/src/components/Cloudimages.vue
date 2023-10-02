<template>
  <img :src="url" alt="" class="max-w-[70px] rounded-lg aspect-square" />
</template>

<script>
import { storage } from '../firebase'
import { ref, getDownloadURL } from 'firebase/storage'
export default {
  
  data: () => {
    return {
      url: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg'
    }
  },
  mounted() {
    getDownloadURL(ref(storage, this.path)).then((dowload_url) => {
      this.url = dowload_url
      console.log(this.url)
    })
    this.$emit('sendData',this.url)
  }
}
</script>
