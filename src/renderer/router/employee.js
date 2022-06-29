export const routes = [
    {
        path: "employee",
        name: "employee",
        component: () => import("@/renderer/views/employees/indexPage.vue"),
    },
    {
        path: 'employee/form',
        name: 'employee.form',
        component:() => import('@/renderer/views/employees/formPage.vue'),
    }
];