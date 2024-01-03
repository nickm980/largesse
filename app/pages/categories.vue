<template>
    <h2>Popular Categories</h2>
    <div class="images-container">
        <a
            v-for="category in categoryData"
            class="image-with-text"
            :href="category.route"
            :style="`background-image: url(${category.imageURL})`"
        >
            <h3>{{ category.title }}</h3>
            <p>{{ category.description }}</p>
        </a>
    </div>
</template>

<script setup>
import earthImagePath from "/static/earth.png";
import puppyImagePath from "/static/puppy.png";
import mathImagePath from "/static/math.png";

const categoryData = [
    {
        title: "Animal Care",
        description: "Help fight animal cruelty.",
        imageURL: puppyImagePath,
        route: "events/animal",
    },
    {
        title: "Climate Change",
        description: "Save the world from damage.",
        imageURL: earthImagePath,
        route: "events/climate",
    },
    {
        title: "Education",
        description: "Teach others something new.",
        imageURL: mathImagePath,
        route: "events/education",
    },
];
</script>

<style scoped>
.images-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
}
.image-with-text {
    width: 20vw;
    height: 20vh;
    background-size: cover;
    text-decoration: none;
    color: white;
}
.title {
    font-weight: bold;
}
</style>
