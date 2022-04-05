import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "About",
        component: () => import('@/views/main/Index')
    },
    {
        path: "/location",
        name: "Location",
        component: () => import('@/views/projects/location/Index')
    },
    {
        path: "/trois",
        name: "Trois",
        component: () => import('@/views/projects/trois/Index')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;