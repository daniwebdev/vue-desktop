<template>
  <nav class="top-navigation flex items-center">
    <div class="brands flex-none">
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    </div>

    <!-- Route Navigation (Prev, Next) -->
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
    <!-- Screen Title -->
    <div class="flex-1 top-nav-center">
      {{ pageTitle }}
    </div>

    <!-- Right Section (Search, Notification, App Window, etc) -->
    <div class="flex-none flex items-center">
      
      <div class="top-nav-menus flex items-center">

        <!-- Global Search -->
        <div class="search-container">
          <div class="search-panel">
            <span>
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <input type="text">
          </div>
  
          <!-- search-suggestion -->
          <div class="search-suggestion">
            <div v-for="(x, i) in [1,2,3,4,5,6,7,8]" :key="i" class="search-suggestion-item">
              <a class="flex items-center" href="#">
                <div>
                  <img src="//via.placeholder.com/40" alt="">
                </div>
                <div class="ml-1">
                  <span class="">
                    Data Karyawan
                  </span>
                  <small class="text-xs block">Dept. IT Development</small>
                </div>
              </a>
            </div>
          </div>
          <!-- search-suggestion -->
        </div>
          <!-- <div class="top-nav-divider"></div> -->

        <ul class="menu-container text-sm">
          <li @click.prevent="toggleSideRight('activities-list')">
            <router-link to="#" class="text-sm">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </router-link>
          </li>
          <li @click.prevent="toggleSideRight('notification-list')">
            <router-link to="#" class="text-sm">
              <!-- <i class="fa fa-bell" aria-hidden="true"></i> -->
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </router-link>

            <div class="badge-notification"></div>
          </li>
          <li @click="toggleDarkMode()">
            <svg v-if="!darkMode" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            <svg v-if="darkMode" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </li>
        </ul>
      </div>

      <div class="top-nav-divider"></div>
    
      <div v-if="!is_browser" class="window-nav">
        <div class="window-nav-item">
          <!-- <i class="fas fa-window-maximize"></i> -->
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
        </div>
        <div class="window-nav-item">
          <!-- <i class="fas fa-window-minimize"></i> -->
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </div>
        <div class="window-nav-item close-app" @click="onCloseApp">
          <!-- <i class="fas fa-times"></i> -->
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
      </div>

      <div v-if="is_browser" class="pr-2 text-sm">
        Logout
      </div>

    </div>
    
  </nav>

  <alert :show="alert_close_app"></alert>


  <side-right id="notification-list">
    <div class="text-gray-500 border-b dark:border-gray-700 py-4 px-3">
      <h1 class="text-lg font-semibold">Notivication.</h1>
      <p class="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
        quidem.
      </p>
      <button class="btn btn-primary text-sm mt-3">Apply</button>
    </div>
  </side-right>

  <side-right id="activities-list">
    <div class="text-gray-500 border-b dark:border-gray-700 py-4 px-3">
      <h1 class="text-lg font-semibold">Activities.</h1>
      <p class="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
        quidem.
      </p>
      <button class="btn btn-primary text-sm mt-3">Apply</button>
    </div>
  </side-right>
  
</template>

<script>

import Alert from '../partial/AlertComponent.vue';
import SideRight from '../partial/SideRight.vue';

import {searchToggleSuggestion} from "@/renderer/utils/common";

export default {

  components: {
    Alert,
    SideRight,
  },
  data() {
    return {
      is_browser: false,
      alert_close_app: false,
      page_title: '',
    }
  },
  watch:{
    $route: function() {
      this.page_title = document.title;
    }
  },
  computed: {
    pageTitle() {
      return this.page_title;
    },
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    toggleBack() {
      //get history back
      this.$router.go(-1);
    },
    toggleForward() {
      //get history forward
      this.$router.go(1);
    },
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode', !this.darkMode);
    },
    onCloseApp() {
      document.querySelector('.alert').classList.toggle('hidden');
    },

    toggleSideRight(id) {
      // document.querySelectorAll('.overlay-side-right').forEach(el => {
      //   el.classList.add('hidden');
      // });

      document.querySelectorAll('.right-menus').forEach(el => {
        
        let elementID = el.getAttribute('id');
        
        elementID != id ? el.classList.remove('active') : el.classList.toggle('active');

        // if(elementID.classList.contains('active')) {
        //   document.getElementById('overlay_' + elementID).classList.remove('hidden');
        // } else {
        //   document.getElementById('overlay_' + elementID).classList.add('hidden');
        // }
        
      });
    },

  },
  mounted() {
    searchToggleSuggestion();
  },

  created() {
    // this.$store.commit('setTitle', this.$route.meta.title);
    if(window.ipcRenderer == undefined) {
      this.is_browser = true;
    }
  }
};
</script>
