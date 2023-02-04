<template>
    <div>
        <div v-for="data in myJson">{{ data }}</div>
    </div>
</template>

<script>
import csvParserjs from "../data/csvParser.js";
export default {
    data() {
        return {
            myJson: json,
        };
    },
};
</script>
