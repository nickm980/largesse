<template>
    <div class="hello">
        <NavBar></NavBar>
        {{ $data.loading }}
        <section class="gen">
            <h2>Volunteer Event</h2>
            <div class="detailed">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94728.28670327867!2d-75.97379860041833!3d42.10192441950143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89daef72dfadb7d1%3A0x68f9703f7ed337f!2sBinghamton%2C%20NY!5e0!3m2!1sen!2sus!4v1675556245246!5m2!1sen!2sus"
                    width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h3>Company Name</h3>
            </div>
        </section>
        <section>
            <h2>Reviews</h2>
            <div v-for="review in post.reviews" v-bind:key="review.name">
                <div class="review-box">
                    <div class="inline">
                        <b>{{ review.name }}</b>
                    </div>
                    <p>{{ review.reason }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { getPost } from '../services/posts.js';
import NavBar from '../components/NavBar.vue';

export default {
    data() {
        return {
            post: getPost()
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.error = this.post = null
            this.loading = true

            getPost(this.$route.params.id, (post) => {
                this.post = post
            })
        },
    },
    components: {
        NavBar,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    margin: 0 !important;
}
section {
    margin-top: 3em;
}

.detailed {
    display: flex;
    align-items: flex-start;
}

.review-box {
    border: 1px solid rgba(0, 0, 0, 0.443);
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
