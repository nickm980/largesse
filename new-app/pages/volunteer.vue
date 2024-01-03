<template>
    <h2>Popular Categories</h2>
    <div class="images-container">
        <div class="image-with-text image1">
            <p>Help Fight Animal Cruelty</p>
            <h3>Animal Care</h3>
            <div class="transparent"></div>
        </div>
        <div class="image-with-text image2">
            <p>Save The World From Damage</p>
            <h3>Climate Change</h3>
            <div class="transparent"></div>
        </div>
        <div class="image-with-text image3">
            <p>Teach others something new</p>
            <h3>Education</h3>
            <div class="transparent"></div>
        </div>
    </div>
    <h2>{{ $route.query.q }} Volunteering Events</h2>
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
.images-container {
    display: flex;
    justify-content: space-around;
}
.image-with-text {
    width: 30vw;
    height: 30vh;
    background-size: cover;
}
.image1 {
    background-image: url("@/static/puppy.png");
}

.image2 {
    background-image: url("@/static/earth.png");
}

.image3 {
    background-image: url("@/static/math.png");
}

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
