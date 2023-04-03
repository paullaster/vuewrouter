import { createRouter, createWebHashHistory } from 'vue-router';
import {Home, Sidebar} from './components';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: {
            default: Home,
            sidebar: Sidebar,
        }

    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export {router};