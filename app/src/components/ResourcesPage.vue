<template>
    <div>
        <div v-for="item in myJson" :key="item.placename">
            <p>{{ item.placename }}</p>
            <p>{{ item.address }}</p>
        </div>
    </div>
</template>

<script>
import data from "../data/testData.json";
export default {
    data() {
        return {
            myJson: data,
        };
    },
};
</script>
