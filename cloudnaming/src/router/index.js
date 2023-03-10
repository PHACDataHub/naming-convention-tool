import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Naming from '../components/Naming.vue'
import Validate from '../components/Validate.vue'
import Convention from '../components/Convention.vue'

const routes = [
    {
        path: '/',
        name: 'Naming',
        component: Naming
    },
    {
        path: '/validate',
        name: 'validate',
        component: Validate
    },
    {
        path: '/convention',
        name: 'convention',
        component: Convention
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router