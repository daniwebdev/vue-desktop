<template>
  <div class="top-nav-menus flex items-center">
    <!-- Global Search -->
    <div class="search-container">
      <div class="search-panel">
        <span>
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
        <input type="text" />
      </div>

      <!-- search-suggestion -->
      <div class="search-suggestion">
        <div
          v-for="(x, i) in [1, 2, 3, 4, 5, 6, 7, 8]"
          :key="i"
          class="search-suggestion-item"
        >
          <a class="flex items-center" href="#">
            <div>
              <img src="//via.placeholder.com/40" alt="" />
            </div>
            <div class="ml-1">
              <span class=""> Data Karyawan </span>
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
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </router-link>
      </li>
      <li @click.prevent="toggleSideRight('notification-list')">
        <router-link to="#" class="text-sm">
          <!-- <i class="fa fa-bell" aria-hidden="true"></i> -->
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
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </router-link>

        <div class="badge-notification"></div>
      </li>
      <li @click="toggleDarkMode()">
        <svg
          v-if="!darkMode"
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
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <svg
          v-if="darkMode"
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
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode", !this.darkMode);
    },

    toggleSideRight(id) {
      document.querySelectorAll(".right-menus").forEach((el) => {
        let elementID = el.getAttribute("id");

        elementID != id
          ? el.classList.remove("active")
          : el.classList.toggle("active");
      });
    },
  },
};
</script>