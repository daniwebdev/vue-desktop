<template>
  <transition>
    <div style="max-width: 400px" class="space-y-2 px-2 shimmer-text bg-gray-200">
      <div
        v-for="(x, i) in range(1, 2)"
        :class="{ 'w-5/6': i == range(1, 2).length - 1 }"
        :key="i"
        class="h-2  rounded shimmer-text"
      ></div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    range(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes shimmer-text {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.shimmer-text {
  border-radius: 20px;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer-text;
  animation-timing-function: linear;
  background: linear-gradient(
    to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%
  );
  background-size: 1000px 104px;
  background-position: -468px 0;
  background-repeat: no-repeat;
  overflow: hidden;
  width: 100%;
}
</style>