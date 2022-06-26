// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'init',
    component: () => import('../App.vue')

  },
  {
    path: '/app',
    name: 'home',
    component: () => import('../layouts/AppHome.vue'),
    children: [
      {
        path: "help",
        name: "help",
        component: () => import("../views/HelpPage.vue"),
      },

      ...require('./employee').routes,
      ...require('./ui').routes,

    ]
  },

  ...require('./auth').routes,
]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
