<template>
    <h2 class="title">{{ post.title }}</h2>
    <div class="outer-detail-contaner">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94728.28670327867!2d-75.97379860041833!3d42.10192441950143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89daef72dfadb7d1%3A0x68f9703f7ed337f!2sBinghamton%2C%20NY!5e0!3m2!1sen!2sus!4v1675556245246!5m2!1sen!2sus"
            width="450"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="inner-detail-container">
            <h3>{{ post.companyName }}</h3>
            <p>{{ post.description }}</p>
            <div class="address">{{ post.address }}</div>
            <div class="spacer"></div>
            <p class="register-container">
                <span class="registered-text">0</span> Currently Registered
            </p>
            <button>Register For Event</button>
        </div>
    </div>
    <h2>Reviews</h2>
    <div v-for="review in post.reviews" v-bind:key="review.name">
        <div class="review-box">
            <div class="inline">
                <b>{{ review.name }}</b>
            </div>
            <p>{{ review.reason }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getPost } from "../services/misc";

const post = ref({
    title: "title",
    companyName: "companyName",
    description: "description",
    address: "address",
});

onMounted(async () => {
    try {
        let path = this.$route.fullPath;
        let id = path.match(/event\/(.+)$/)[1];
        this.post = await getPost(id);
    } catch (error) {
        console.log(error);
    }
});
</script>

<style scoped>
.title {
    font-size: 2rem;
}
.outer-detail-container {
    gap: 3rem;
    display: flex;
}
</style>
