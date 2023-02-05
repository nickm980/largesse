<template>
    <div class="main">
        <NotHomeNav></NotHomeNav>
        {{ $data.loading }}
        <section class="gen">
            <h2 id="title">{{post.title}}</h2>
            <div class="detailed">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94728.28670327867!2d-75.97379860041833!3d42.10192441950143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89daef72dfadb7d1%3A0x68f9703f7ed337f!2sBinghamton%2C%20NY!5e0!3m2!1sen!2sus!4v1675556245246!5m2!1sen!2sus"
                    width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div class="two">
                    <h3>{{post.companyName}}</h3>
                    <p>{{post.description}}</p>
                    <div class="flex-inline">
                        <div class="phone-number">666-666-6666</div>
                        <div class="adress">{{post.address}}</div>
                    </div>
                    <div class="spacer"></div>
                    <p class="registered"><span class="b">0</span> Currently Registered</p>
                    <button>Register For Event</button>
                </div>
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
import NotHomeNav from '../components/NotHomeNav.vue';
import {getPost} from '../services/posts.js';

export default {
    data() {
        return {
            post: getPost(this.$route.params.title)
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
        NotHomeNav,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.registered {
    font-size: .8rem;
    margin-bottom: .5rem;
}
.registered {
    font-style: italic;
}
.b {
    font-weight: bold;
}
.gen {
    margin: 0 auto;
    margin-top: 2rem;

}
#title {
    text-align: center;
    font-size: 2rem;
}
button {
    outline: none;
    background-color: transparent;
    border: 1px solid #a79987;
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    padding-left: 1.5em;
    padding-right: 1.5em;
    letter-spacing: 2px;
    font-size: .8rem;
}
button:not(#find) {
    background-color: #9e9377;
    color: #eeebe6;
}
#find {
    margin-left: 10px;
}
button:hover {
    filter: brightness(0.8);
    cursor: pointer;
}.flex-inline {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
}
.flex-inline div {
    flex-grow: 1;
    font-weight: bold;
    opacity: .8;
    letter-spacing: 1px;
}

.two {
    max-width: 450px;
    height: 450px;
    display: flex;
    flex-direction:column;
    padding-left: 1em;
}
h3{
    margin: 0 !important;
}
section {
    max-width: 900px;
    margin: 0 auto;
    margin-top: 3em;

}

.detailed {
    margin: 0 auto;
    max-width: 900px;
    gap: 3rem;
    margin-top: 2rem;
    display: flex;
    align-items: flex-start;
}

.review-box:first {margin-top: 1em;}
.review-box {
    margin-top: 1rem;
    background-color: #dbd8d2;
    padding: 1em;
    border-radius: 10px;
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
