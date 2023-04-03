import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Sidebar from './components/Sidebar.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,

    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export {router};