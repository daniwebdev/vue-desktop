<template>
  <div :id="id" class="right-menus dark:bg-black">
    <slot></slot>
  </div>

  <div :id="'overlay_'+id" class="page-overlay hidden overlay-side-right"></div>

</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ''
        },
    },
}
</script>