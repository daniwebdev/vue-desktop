// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from "vue-router";
if(window.__TAURI_IPC__ instanceof Function) {
  var app = require('@tauri-apps/api/app')
}

const routes = [
  {
    path: "/",
    name: "init",
    redirect: '/app',
    // component: () => import("../App.vue"),
  },
  {
    path: "/app",
    name: "home",
    component: () => import("../layouts/AppHome.vue"),
    children: [
      {
        path: "",
        name: "home.app",
        component: () => import("../views/HomePage.vue"),
      },
      ...require("./employee").routes,
      ...require("./ui").routes,
    ],
  },

  ...require("./auth").routes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  var appName = 'Untitled';

  if(window.__TAURI_IPC__ != undefined) {
    appName = await app.getName();
  }

  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // const previousNearestWithMeta = from.matched
  //   .slice()
  //   .reverse()
  //   .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  document.title = appName
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  }
   //else if (previousNearestWithMeta) {
    //document.title = previousNearestWithMeta.meta.title;
  //}

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
