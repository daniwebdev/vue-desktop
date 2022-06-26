export const routes = [
  {
    path: "ui/form",
    name: "ui.form",
    meta: {
      title: "Form",
    },
    component: () => import("@/renderer/views/ui-kit/FormPage.vue"),
  },
  {
    path: "ui/card",
    name: "ui.card",
    meta: {
      title: "Card UI",
    },
    component: () => import("@/renderer/views/ui-kit/CardPage.vue"),
  },
  {
    path: "ui/button",
    name: "ui.button",
    meta: {
      title: "Button Element",
    },
    component: () => import("@/renderer/views/ui-kit/ButtonPage.vue"),
  },
  {
    path: "ui/shimmer",
    name: "ui.shimmer",
    meta: {
      title: "shimmer",
    },
    component: () => import("@/renderer/views/ui-kit/ShimmerPage.vue"),
  },
  {
    path: "ui/data-grid",
    name: "ui.data-grid",
    meta: {
      title: "Data Grid",
    },
    component: () => import("@/renderer/views/ui-kit/DataGridPage.vue"),
  },
];
