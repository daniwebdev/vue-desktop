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

<script>
import TopNavigation from '@/renderer/components/navigations/TopNavigation.vue'
import SideNavigation from '@/renderer/components/navigations/SideNavigation.vue'
import BottomNavigation from '@/renderer/components/navigations/BottomNavigation.vue'

export default {
  name: 'AppHome',
  components: {
    TopNavigation,
    BottomNavigation,
    SideNavigation,
  },

  data() {
    return {

    }
  },

  mounted() {

    this.$store.commit('toggleDarkMode', localStorage.getItem("darkMode") == "true");
  },

  updated() {

  },
  

}
</script>