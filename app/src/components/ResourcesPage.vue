<template>
    <div class="main">
        <NavBar></NavBar>
        <div v-for="item in myJson" :key="item.placename">
            <div class="box">
                <p>{{ item.placename }}</p>
                <p>{{ item.address }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import data from "../data/testData.json";
export default {
    components: {
        NavBar,
    },
    data() {
        return {
            myJson: data,
        };
    },
};
</script>