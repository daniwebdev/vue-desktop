export const router = [
    {
        path: 'general',
        name: 'setting.general',
        meta: {
            title: 'General',
        },
        component: () => import('@/renderer/views/setting/GeneralPage.vue'),
    },
    {
        path: 'system',
        name: 'setting.system',
        meta: {
            title: 'System Setting',
        },
        component: () => import('@/renderer/views/setting/GeneralPage.vue'),
    }
]