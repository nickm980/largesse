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
import { getPosts } from "../../services/misc.ts";
import { ref, onMounted } from "vue";

const myData = ref([]);

onMounted(async () => {
    myData.value = await getPosts();
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
