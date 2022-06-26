<template>
  <!-- Footer -->
  <div class="bottom-navigation">
    <div>
        <i class="fa fa-link" aria-hidden="true"></i> {{ current_path }}
    </div>
    <div class="flex flex-row side-right">
      <div class="clock">
        <i class="fas fa-clock" aria-hidden="true"></i>
        <span>00:00:00</span>
      </div>

      <div class="network flex">
        <span v-if="networkStatus == 'up'" class="network-up text-green-600">
          <i class="fas fa-wifi"></i>
        </span>
        <span v-if="networkStatus == 'down'" class="network-down text-red-600">
          <i class="fas fa-wifi"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
        networkStatus: "up",
    };
    },
    computed: {
        current_path() {
            return this.$route.fullPath;
        },
    },
    mounted() {
        setInterval(this.realtime_clock, 1000);
    },

    methods: {
    realtime_clock() {
        var clock = document.querySelector('.clock span');
        var time = new Date();
        var hours = time.getHours().toString().padStart(2, '0');
        var minutes = time.getMinutes();
        var seconds = time.getSeconds().toString().padStart(2, '0');
        // var ampm = hours >= 12 ? 'PM' : 'AM';
        // hours = hours % 12;
        // hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        clock.innerHTML = hours + ':' + minutes + ':' + seconds;
    },
    },
};
</script>

<style lang="scss">

</style>