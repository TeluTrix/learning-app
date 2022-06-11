import { createWebHistory, createRouter } from "vue-router";
import HomeView from '../views/HomeView.vue'
import AbuView from '../views/subjects/AbuView.vue'
import M946View from '../views/subjects/M946View.vue'
import M226View from "../views/subjects/M226View.vue";


//Set Imports
import EuSicherheitsArchitekturView from '../views/sets/EuSicherheitsarchitekturView.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/abu",
        name: "Abu",
        component: AbuView,
    },
    {
        path: "/m946",
        name: "M946",
        component: M946View,
    },
    {
        path: "/m226",
        name: "M226",
        component: M226View,
    },


    //routes of different sets
    {
        path: "/abu/eu-sicherheitsarchitektur",
        name: "Abu - Eu Sicherheitsarchitektur",
        component: EuSicherheitsArchitekturView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;