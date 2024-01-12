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
import { useRoute } from "#app";

const myData = ref([]);
const route = useRoute();
let category = route.params.category;

onMounted(async () => {
    myData.value = await getPostsByCategory(category);
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
