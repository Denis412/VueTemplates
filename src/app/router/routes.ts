import { type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () =>
            import('@layouts/MainLayout/components/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () =>
                    import('@pages/HomePage/components/HomePage.vue'),
            },
        ],
    },
];

export default routes;
