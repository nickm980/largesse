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
        path: "/service/:id",
        name: "About",
        component: IService,
    },
    {
        path: "/serviceform",
        name: "serviceform",
        component: ServiceForm,
    },
    {
        path: "/findvolunteers",
        name: "Find Volunteers",
        component: FindVolunteers,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
