<template>
  <router-link to="#" :title="data.name" class="main-menu-item">
    <i :class="data.icon"></i>
    <!-- <span class="block">{{ data.name }}</span> -->

    <div class="nav-tooltip">{{ data.name }}</div>
  </router-link>
</template>

<script>
export default {
  name: "NavMenuItem",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
a.main-menu-item {
  position: relative;
  overflow: visible;

  &:hover .nav-tooltip {
    visibility: visible;
  }

  .nav-tooltip {
    text-align: left;
    z-index: 1000;
    position: absolute;
    top: calc($side-nav-width / 5);
    left: 130px;
    width: 120px;
    transform: translateX(-50%);
    @apply bg-gray-300;
    padding: 10px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    color: #000;
    visibility: hidden;

    // transition: all 0.3s ease-in-out;
    &::before {
      content: "";
      position: absolute;
      top: 15px;
      left: -14px;
      transform: rotate(-90deg);
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid rgb(209 213 219 / var(--tw-bg-opacity));
    }
  }
}
</style>