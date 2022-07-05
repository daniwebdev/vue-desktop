<template>
  <div class="left-navigation">
    <ul class="vertical-menu" v-if="menus.length">
      <li v-for="(menu, index) in menus" :key="index" class="menu-item">
        
        <nav-menu-item :data="menu"></nav-menu-item>

        <ul
          class="submenu"
          v-if="menu.children != undefined && menu.children.length > 0"
        >
          <li class="title">
            {{ menu.name }}
          </li>
          <li
            v-for="(submenu, sub_index) in menu.children"
            :key="'sub_' + sub_index"
          >
            <router-link :to="submenu.route"> {{ submenu.name }} </router-link>
          </li>
        </ul>
      </li>
    </ul>

    <ul class="bottom-section-menu">
      <li @click="reload()">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
      </li>
      <li>
        <router-link :to="{name: 'setting.general'}">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import NavMenuItem from '../partial/NavMenuItem.vue';


const init_menu_event = () => {

    var remove_all_active = () => {
        document.querySelectorAll('.vertical-menu>li.active').forEach(sub => {
          try {
            sub.classList.remove('active');
          } catch (error) {
            console.log(error)
          }

        });
    }

    var on_click_submenu = () => {
      document.querySelectorAll('ul.submenu>li').forEach(el => {
        
        var _handle = () => {
          remove_all_active();

          document.querySelector('.page-overlay').classList.add('hidden');
        }

        el.removeEventListener('click', _handle, true);
        
        el.addEventListener('click', _handle, true);
      });
    }

    document.querySelectorAll('.vertical-menu>li').forEach(el => {
      
      var _handle = function () {
        remove_all_active();

        this.classList.add('active');

        document.querySelector('.page-overlay').classList.remove('hidden');

        on_click_submenu();
      }

      el.removeEventListener('click', _handle, true);

      el.addEventListener('click', _handle, true);
    });

    document.querySelector('.page-overlay').addEventListener('click', function () {
        this.classList.add('hidden');
        remove_all_active();
    });
}

export default {
  components: { NavMenuItem },
  data() {
    return {
      menus: [
        {
          name: "Employee",
          icon: "fas fa-address-card",
          children: [
            {
              name: "Data Karyawan",
              icon: "fas fa-home",
              route: {
                name: "employee"
              },
            },
            {
              name: "Jam Kerja",
              icon: "fas fa-user",
              route: "#",
            },
          ],
        },
        {
          name: "UI Kit",
          icon: "fas fa-paint-brush",
          children: [
            {
              name: "Form",
              icon: "fas fa-form",
              route: {
                name: "ui.form"
              },
            },
            {
              name: "Button",
              icon: "fas fa-form",
              route: {
                name: "ui.button"
              },
            },
            {
              name: "Card",
              icon: "fas fa-form",
              route: {
                name: "ui.card"
              },
            },
            {
              name: "Shimmer",
              icon: "fas fa-sync",
              route: {
                name: "ui.shimmer"
              },
            },
            {
              name: "Data Grid",
              icon: "fas fa-table",
              route: {
                name: "ui.data-grid"
              },
            },
          ],
        },
      ],
    };
  },

  methods: {
    reload() {
      console.log('tset');
      location.reload();
    },
  },

  mounted() {
    init_menu_event();
  }
};
</script>

<style lang="scss">

</style>