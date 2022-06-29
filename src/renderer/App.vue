<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  mounted() {
    console.log(this.$route.query);
    if(this.$route.query.goto == 'login') {
      this.$router.push({ name: 'login' })
    }

    this.checkDevice();
  },
  methods: {
    async checkDevice() {
      const appName = this.$tauriAPI != undefined ? await this.$tauriAPI.app.getName():'NOT';

      console.log(appName);
    }
  }
}
</script>