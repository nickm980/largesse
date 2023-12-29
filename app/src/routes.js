import { createWebHistory, createRouter } from "vue-router";
import Home from "./routes/HomeRoute.vue";
import EventDescription from "./routes/EventDescription.vue";
import ServiceForm from "./routes/CreateEventForm.vue";
import EventsPage from "./components/pages/EventsPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/event/:id",
        name: "Event",
        component: EventDescription,
    },
    {
        path: "/create",
        name: "create",
        component: ServiceForm,
    },
    {
        path: "/volunteer",
        name: "Volunteer",
        component: EventsPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
