<template>
    <div class="main">
        <NotHomeNav></NotHomeNav>
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

</style>
<script>
import NotHomeNav from './NotHomeNav.vue';
import data from "../data/testData.json";
export default {
    components: {
        NotHomeNav,
    },
    data() {
        return {
            myJson: data,
        };
    },
};
</script>