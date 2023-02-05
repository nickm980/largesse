<template>
    <div class="main">
        <NotHomeNav></NotHomeNav>
        <h2>Popular Categories</h2>
        <div class="flex-major">
            <div class="major one">
                <p>Help Fight Animal Cruelty</p>
                <h3>Animal Care</h3>
                <div class="transparent">
                </div>
            </div>
            <div class="major two">
                <p>Save The World From Damage</p>
                <h3>Climate Change</h3>
                <div class="transparent">
                </div>
            </div>
            <div class="major three">
                <p>Teach others something new</p>
                <h3>Education</h3>
                <div class="transparent">
                </div>
            </div>
        </div>
        <h2>{{ $route.query.q }} Volunteering Events</h2>
        <div class="grid">
            <div v-for="item in myJson" :key="item.placename" class="box-container">
                <router-link :to="'/volunteer/' + item.placename">
                    <div class="box">
                        <p class="title">{{ item.title == null ? item.placename : item.title }}</p>
                        <p class="desc">{{ item.description }}</p>
                        <div class="flex">
                            <p class="address">{{ item.address }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.box-container {
    flex-basis: 33%;
}

.major.one {
    background-image: url("@/assets/puppy.png");
}

.major.two {
    background-image: url("@/assets/earth.png");
}

.major.three {
    background-image: url("@/assets/math.png");
}

.major {
    background-size: cover;
}

h2 {
    margin-top: 2rem;
    text-transform: capitalize;
}

.transparent {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.695);
}

.major h3 {
    padding: 1rem;
    padding-top: 2.2rem;
    font-size: 1.8rem;

    position: absolute;
}

.major p {
    position: absolute;
    padding: 1em;
}

.major {
    color: rgb(220, 220, 220);
    height: 250px;
    cursor: pointer;
}

.grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
}

.title {
    font-weight: bold;
}

.box:hover {
    border: 1px solid rgba(0, 0, 0, 0.44);
}

.box {
    flex-basis: 33.333333%;
    flex-grow: 1;
    margin-top: 1rem;
    border: 1px solid #dbd8d2;

    background-color: #dbd8d2;
    border-radius: 10px;
    padding: 1em;
}

.flex-major {

    display: flex;
    flex-wrap: wrap;
    gap: .5rem;

    justify-content: flex-start;
    margin-top: 1em;
}

.flex-major .major {
    flex-basis: 32.85%;

}
</style>
<script>
import NotHomeNav from '../NotHomeNav.vue';
import data from "../../data/testData.json";
export default {
    components: {
        NotHomeNav,
    },
    data() {
        return {
            post: getPost(this.$route.params.title)
        }
    },
    async mounted()  {
        await this.fetchData()
    },
    methods: {
        async fetchData() {
            this.error = this.post = null
            this.loading = true

            getPost(this.$route.params.id, (post) => {
                this.post = post
            })
        },
    },
};
</script>