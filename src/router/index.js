import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeIndexView.vue";
import Projects from "../views/Projects/ProjectsIndexView.vue";
import Error from "../views/Error/ErrorIndexView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/projekte',
            name: 'projects',
            component: Projects
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