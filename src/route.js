import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Sidebar from './components/Sidebar.vue';

const routes = [
    {
        path: '/',
        components: {
            default: Home,
            sidebar: Sidebar
        },

    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export {router};