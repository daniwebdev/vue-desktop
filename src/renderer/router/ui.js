export const routes = [
    {
        path: "ui/form",
        name: "ui.form",
        component: () => import("@/renderer/views/ui-kit/FormPage.vue"),
    },
    {
        path: "ui/card",
        name: "ui.card",
        component: () => import("@/renderer/views/ui-kit/CardPage.vue"),
    },
    {
        path: "ui/button",
        name: "ui.button",
        component: () => import("@/renderer/views/ui-kit/ButtonPage.vue"),
    },
];