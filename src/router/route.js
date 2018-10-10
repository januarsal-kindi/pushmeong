import Home from '../components/views/Home.vue'
import VueRouter from 'vue-router'
 
const routes = [
    {
        path: "/",
        component: Home
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
 })