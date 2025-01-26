import { createRouter, createWebHashHistory } from 'vue-router';
import Counter from '@/components/Counter.vue';
import HelloWorld from '@/components/HelloWorld.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/counter',
        name: 'counter',
        component: Counter
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;