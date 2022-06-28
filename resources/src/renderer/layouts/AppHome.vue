<template>
  
  <top-navigation></top-navigation>
  <side-navigation></side-navigation>

  <!-- Main Router -->
  <div class="page-overlay hidden"></div>
  <div class="full-page-overlay hidden"></div>

  <main>

    <div class="context-menu">
      <ul>
        <li>
          <i class="fas fa-pencil-alt"></i>
          <span>Edit</span>
        </li>
        <li class="">
          <i class="fas fa-copy"></i> <span>Copy</span>
        </li>
        <li class="">
          <i class="fas fa-paste"></i> <span>Paste</span>
        </li>
        <li class="">
          <i class="fas fa-trash-alt"></i> <span>Delete</span>
        </li>

      </ul>
    </div>

    <router-view/>

  </main>

  <bottom-navigation></bottom-navigation>

</template>

<style lang="scss">


  .context-menu {
    @apply bg-white rounded;
    @apply dark:bg-gray-900 dark:text-gray-400;
    width: 150px;
    z-index: 1000;
    position: absolute;
    left: -9999px;
    top: -9999px;

    ul {
      li {
        @apply border-b text-xs p-2 hover:bg-gray-300 dark:border-gray-800 ;
        cursor: pointer;
        &:hover {
          @apply dark:bg-gray-700;
        }
        &:first-child {
          @apply rounded-t ;
        }
        &:last-child {
          @apply border-none rounded-b ;
        }
        span {
          @apply ml-2;
        }
      }
    }
  }
</style>
<script>
import TopNavigation from '@/renderer/components/navigations/TopNavigation.vue'
import SideNavigation from '@/renderer/components/navigations/SideNavigation.vue'
import BottomNavigation from '@/renderer/components/navigations/BottomNavigation.vue'
import {initContextMenu} from '@/renderer/utils/common.js';

export default {
  name: 'AppHome',
  components: {
    TopNavigation,
    BottomNavigation,
    SideNavigation,
  },

  data() {
    return {
      // current_path: '/',
    }
  },

  mounted() {
      initContextMenu();

    this.$store.commit('toggleDarkMode', localStorage.getItem("darkMode") == "true");
  },
  updated() {
      initContextMenu();
  },
  

}
</script>
