import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeIndexView.vue";
import Streaming from "../views/Streaming/StreamingIndexView.vue";
import Contact from "../views/Contact/ContactIndexView.vue";
import Error from "../views/Error/ErrorIndexView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //{
        //    path: '/',
        //    name: 'under-construction',
        //    component: Default
        //},
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/streaming',
            name: 'streaming',
            component: Streaming
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: Error
        }

    ],
    //Scroll to the top
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

export default router