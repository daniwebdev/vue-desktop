<template>
  <router-link to="#" :title="data.name">
    <i :class="data.icon"></i>
    <!-- <span class="block">{{ data.name }}</span> -->
  </router-link>
</template>

<script>
export default {
  name: 'NavMenuItem',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>