<template>
  <nav class="top-navigation flex items-center">
    <div class="brands flex-none dragable">
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
    <route-navigation></route-navigation>

    <!-- Screen Title -->
    <div class="flex-1 top-nav-center dragable">
      {{ pageTitle }}
    </div>

    <!-- Right Section (Search, Notification, App Window, etc) -->
    <div class="flex-none flex items-center">
      
      <!-- Action Right Section -->
      <action-right-section></action-right-section>

      <div class="top-nav-divider"></div>

      <div v-if="!is_browser" class="window-nav">
        <div class="window-nav-item">
          <!-- <i class="fas fa-window-maximize"></i> -->
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
            <path
              d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
            ></path>
          </svg>
        </div>
        <div class="window-nav-item">
          <!-- <i class="fas fa-window-minimize"></i> -->
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
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <div class="window-nav-item close-app" @click="onCloseApp">
          <!-- <i class="fas fa-times"></i> -->
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>

      <div v-if="is_browser" class="pr-2 text-sm">Logout</div>
      
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
import Alert from "../partial/AlertComponent.vue";
import SideRight from "../partial/SideRight.vue";
import { 
  RouteNavigation,
  ActionRightSection
} from "../partial/TopNavigationComponents";

import { searchToggleSuggestion } from "@/utils/common";

export default {
  components: {
    Alert,
    SideRight,
    RouteNavigation,
    ActionRightSection
  },
  data() {
    return {
      is_browser: false,
      alert_close_app: false,
      page_title: "",
    };
  },
  watch: {
    $route: function () {
      this.page_title = document.title;
    },
  },
  computed: {
    pageTitle() {
      return this.page_title == "" ? document.title : this.page_title;
    },
  },
  methods: {
    onCloseApp() {
      document.querySelector(".alert").classList.toggle("hidden");
    },

    /* support tauriAPI */
    dragableArea() {
      document.querySelectorAll(".dragable").forEach((el) => {
        el.addEventListener("mousedown", async () => {

          await this.$tauriAPI.window.appWindow.startDragging();
        });
      });
    },
  },
  mounted() {
    searchToggleSuggestion();

    /* set dragable area */
    this.dragableArea();

    if (this.$tauriAPI == undefined) {
      this.is_browser = true;
    }
  },
};
</script>


<style>
.dragable {
  cursor: move;
}
.top-navigation {
  user-select: none;
}
</style>