import { createRouter, createWebHistory } from "vue-router";
import resume from '@/pages/resume.vue'
import programming from "@/pages/programming.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'programming',
            component: programming,
        },
        {
            path: '/resume',
            name: 'resume',
            component: resume,
        },
    ],
});

export default router;