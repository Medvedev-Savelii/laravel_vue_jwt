import {createRouter} from "vue-router";
import {createWebHistory} from "vue-router";


const routes = [
    {
        path: '/people', component: () => import('./components/Person/Index.vue'),
        name: 'person.index'
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
