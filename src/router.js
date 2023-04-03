import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Sidebar from './components/Sidebar.vue';
import {Settings, Email, Subscription, Profile, ChangeProfile, ViewProfile} from './views'

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
        component: Settings,
        name:'settings',
        children: [
            {
                path: 'email',
                components: {
                    default: Email,
                    subscription: Subscription
                },
                name: 'email'
            },
            {
                path: 'profile',
                components: {
                    default: Profile,
                    changeProfile: ChangeProfile,
                    viewProfile: ViewProfile
                },
                name: 'profile'
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export {router};