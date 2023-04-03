import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Sidebar from './components/Sidebar.vue';
import {Settings} from './views'

const routes = [
    {
        path: '/',
        components: {
            default: Home,
            sidebar: Sidebar
        },

    },
    {
        path: '/settings',
        component: Settings
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export {router};