<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
* {
    padding: 0;
    margin: 0;
}

body {
    background: #eeebe6;
    padding-left: 2em;
}

h1 {
    color: #9e9377;
    font-size: 4rem;
    line-height: 1.1;
}
</style>
