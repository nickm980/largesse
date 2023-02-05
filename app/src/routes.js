import { createWebHistory, createRouter } from "vue-router";
import Home from "./routes/Home.vue";
import About from "./routes/About.vue";
import IService from "./routes/IService.vue";
import ServiceForm from "./routes/ServiceForm.vue";
import FindVolunteers from "./routes/FindVolunteers.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/volunteer/:id",
        name: "About",
        component: IService,
    },
    {
        path: "/create",
        name: "create",
        component: ServiceForm,
    },
    {
        path: "/volunteer",
        name: "Volunteer",
        component: FindVolunteers,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
