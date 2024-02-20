import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '',
        redirect: { name: 'home' },
        component: () => import('../App.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import("../pages/Home.vue"),
                meta: {
                    title: 'Casino - Home'
                }
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('../pages/Login.vue'),
                meta: {
                    title: 'Casino - Session'
                }
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;