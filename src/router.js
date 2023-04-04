import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Sidebar from './components/Sidebar.vue';
import Users from './components/Users.vue';
import { Settings, Email, Subscription, Profile, ChangeProfile, ViewProfile, Search,  } from './views'

const routes = [
    {
        path: '/',
        components: {
            default: Home,
            sidebar: Sidebar
        },

    },
    {
        path: '/users',
        component: Users,

    },
    {
        path: '/somewhere',
        redirect: {name: "settings"},
        // components: {
        //     default: Home,
        //     sidebar: Sidebar
        // },

    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/search/:searchText',
        redirect: to => {
            return {path: '/search', query: {q: to.params.searchText}}
        },
        // components: {
        //     default: Home,
        //     sidebar: Sidebar
        // },

    },
    {
        path: '/settings',
        component: Settings,
        name: 'settings',
        children: [
            {
                path: 'email',
                components: {default: Email, subscriptions: Subscription},
                name: 'email',
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

export { router };