<template>
    <div class="home text-center">
      <img class="mx-auto" alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/renderer/components/HelloWorld.vue'

export default {
  // name: 'Home',
  components: {
    HelloWorld
  },
    created() {
    this.$store.commit('set_title', 'Home')
  },
}
</script>
