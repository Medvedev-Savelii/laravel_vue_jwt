import {createRouter} from "vue-router";
import {createWebHistory} from "vue-router";


const routes = [
    {
        path: '/fruits', component: () => import('./components/Fruit/Index.vue'),
        name: 'fruit.index'
    },
    {
        path: '/users/registration', component: () => import('./components/User/Registration.vue'),
        name: 'user.registration'
    }, {
        path: '/users/login', component: () => import('./components/User/Login.vue'),
        name: 'user.login'
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
