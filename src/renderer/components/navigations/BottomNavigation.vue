<template>
  <!-- Footer -->
  <div class="bottom-navigation">
    <div class="bottom-navigation-left inline-block">
        <div style="width: 170px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" class="d-flex items-center align-middle mr-5">
          <i class="fa fa-link" aria-hidden="true"></i> {{ current_path }} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, autem.
        </div>
        <div>
          <i class="fa fa-laptop" aria-hidden="true"></i> 129.0.10.1
        </div>
        <div>
          <i class="fa fa-building" aria-hidden="true"></i> Prioritas Group
        </div>
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
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        clock.innerHTML = hours + ':' + minutes + ':' + seconds;
    },
    },
};
</script>

<style lang="scss">
  .bottom-navigation-left {
    div {
      @apply inline-block;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>