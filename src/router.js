import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Sidebar from './components/Sidebar.vue';
import Users from './components/Users.vue';
import SingleUser from './components/SingleUser.vue';
import { Settings, Email, Subscription, Profile, ChangeProfile, ViewProfile, Search, Login,  } from './views'

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
        path: '/users/:userId',
        component: SingleUser,
        props: true,
    },
    {
        path: '/login',
        component: Login,
        props: true,
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
        meta: {requiresAuth: true},
        children: [
            {
                path: 'email',
                components: {default: Email, subscriptions: Subscription},
                name: 'email',
                meta: {requiresAuth: true}
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
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    if(to.name !== 'default'){
        return {
            path: '/'
        }
    }
});


export { router };