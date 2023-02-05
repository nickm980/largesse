<template>
    <div class="main">
        <NotHomeNav></NotHomeNav>
        <h2>Popular Categories</h2>
        <div class="flex-major">
            <router-link to="/volunteer?q=shelters" class="major one">
                <div>
                    <p>Help Fight Animal Cruelty</p>
                    <h3>Animal Care</h3>
                    <div class="transparent"></div>
                </div>
            </router-link>
            <router-link to="/volunteer?q=climate" class="major two">
                <div>
                    <p>Save The World From Damage</p>
                    <h3>Climate Change</h3>
                    <div class="transparent"></div>
                </div>
            </router-link>
            <router-link to="/volunteer?q=education" class="major three">
                <div>
                    <p>Teach others something new</p>
                    <h3>Education</h3>
                    <div class="transparent"></div>
                </div>
            </router-link>
        </div>
        <h2>{{ $route.query.q }} Volunteering Events</h2>
        <div class="grid">
            <div
                v-for="item in myJson"
                :key="item.placename"
                class="box-container"
            >
                <router-link :to="'/volunteer/' + item.placename">
                    <div class="box">
                        <p class="title">
                            {{
                                item.title == null ? item.placename : item.title
                            }}
                        </p>
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
    gap: 0.5rem;

    justify-content: flex-start;
    margin-top: 1em;
}

.flex-major .major {
    flex-basis: 32.85%;
}
</style>
<script>
import NotHomeNav from "../NotHomeNav.vue";
import { getPostsByCategory } from "../../services/posts.js";

export default {
    components: {
        NotHomeNav,
    },
    data() {
        return {
            myData: [
                {
                    title: "Catholic Charities - Broome County/Mother Teresa's Cupboard - Food Distribution Center",
                    address:
                        "202 Garfield Ave, Endicott, NY 13760, United States",
                    place_id: "ChIJ__8Pi47s2okR4Kn9HSUCvUU",
                    category: "pantry",
                    rating: "4.8",
                },
                {
                    title: "Loaves and Fish Pantry",
                    address: "1262 Mill St, NY 13903, United States",
                    place_id: "ChIJ7yrGI2fv2okRxn0HpEswf4w",
                    rating: "5",
                    category: "pantry",
                },
                {
                    title: "Salvation Army",
                    address: "127 Washington St, Binghmaton,NY, United States",
                    place_id: "ChIJGWLRtm_v2okRMUdEvZv_s-E",
                    rating: "4.7",
                    category: "pantry",
                },
                {
                    title: "Northminster Presbyterian - Food Distribution Center",
                    address:
                        "711 Farm to Market Rd, Endicott, NY 13760, United States",
                    place_id: "ChIJ50peLbLt2okR9YFu3UUEX_8",
                    rating: "0",
                    category: "pantry",
                },
                {
                    title: "Saint Patrick's Roman Catholic Church - Food Distribution Center",
                    address: "50 Oak St, Binghamton, NY 13905, United States",
                    place_id: "ChIJ7U3pEmvv2okRrlWk___XgHQ",
                    rating: "4.5",
                    category: "pantry",
                },
                {
                    title: "Our Lady of Sorrows - Food Pantry",
                    address: "801 Main St, Vestal, NY 13850, United States",
                    place_id: "ChIJ7U3pEmvv2okRrlWk___XgHQ",
                    rating: "5",
                    category: "pantry",
                },
                {
                    title: "United Way of Broome County",
                    address: "101 Jensen Rd, Vestal, NY 13850, United States",
                    place_id: "ChIJyVQXhQjv2okR_AIrAjEusr4",
                    category: "shelters",
                    rating: "4.5",
                },
                {
                    title: "Volunteers of America",
                    address:
                        "295 Clinton St, Binghamton, NY 13905, United States",
                    place_id: "ChIJsYbUZXsZyUwRNG_a2J45e2I",
                    category: "shelters",

                    rating: "4.3",
                },
                {
                    title: "Volunteers of America",
                    category: "shelters",

                    address:
                        "320 Chenango St, Binghamton, NY 13901, United States",
                    place_id: "ChIJD4yPYn_v2okROc-xjpp5Yjc",
                    rating: "3.6",
                },
                {
                    title: "The Beloved Community House",
                    category: "shelters",

                    address:
                        "45 Riverside Dr, Binghamton, NY 13905, United States",
                    place_id: "ChIJVXqUlmr_54kRm5H2G7VhSP8",
                    rating: "4.3",
                },
                {
                    title: "Center for Bioregional Living",
                    category: "shelters",
                    address:
                        "253 Briggs Hwy, Ellenville, NY 12428, United States",
                    place_id: "ChIJi-KbDu_v2okRg2BOUI1jonQ",
                    rating: "3",
                },
                {
                    title: "Voluntary Action Center",
                    category: "shelters",
                    address: "101 Jensen Rd, Vestal, NY 13850, United States",
                    place_id: "ChIJC90qErnv2okRIsVvT_UqNBQ",
                    rating: "3",
                },
                {
                    title: "Broome County Habitat For Humanity",
                    category: "shelters",
                    address: "103 Adams Ave, Endicott, NY 13760, United States",
                    place_id: "ChIJb4Z-Tors2okRMy4FkW9OvKo",
                    rating: "3",
                },
            ],
        };
    },
    async mounted() {
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            getPostsByCategory(this.$route.query.q, (myData) => {
                this.myData = myData;
            });
        },
    },
};
</script>
