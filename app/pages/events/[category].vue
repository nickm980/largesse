<template>
    <h2>{{ $route.params.category }} Events</h2>
    <div class="events-container">
        <a
            class="event-container"
            v-for="item in myData"
            :href="'/event/' + item.id"
            :key="item.title"
        >
            <p class="title">
                {{ item.title }}
            </p>
            <p>{{ item.description }}</p>
            <p>{{ item.address }}</p>
        </a>
    </div>
</template>

<script setup>
import { getPostsByCategory } from "../../services/misc.ts";
import { ref, onMounted } from "vue";

const myData = ref([
    {
        title: "Binghamton Animal Shelter",
        description:
            "We are need of volunteers who can help us with our animals",
        address: "address1",
        id: "event-id1",
    },
    {
        title: "Binghamton Food Pantry",
        description:
            "We are need of volunteers who can help us with our food pantry",
        address: "address2",
        id: "event-id2",
    },
]);

onMounted(async () => {
    try {
        this.myData = await getPostsByCategory(`${this.$route.query.q}`);
    } catch (error) {
        console.log(`Error fetching posts: ${error}`);
    }
});
</script>

<style scoped>
.events-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
}

.event-container {
    background: gray;
    color: white;
    text-decoration: none;
}

.title {
    font-weight: bold;
}
</style>
