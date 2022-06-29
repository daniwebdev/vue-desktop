<template>
  <div class="flex-none">
    <div class="app-nav px-3">
      <button class="prev-nav-btn" @click="toggleBack()">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </button>

      <button class="next-nav-btn" @click="toggleForward()">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    toggleBack() {
      //get history back
      this.$router.go(-1);
    },
    toggleForward() {
      //get history forward
      this.$router.go(1);
    },
  },
};
</script>