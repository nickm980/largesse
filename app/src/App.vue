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
    height: 100%;
}
html,body {
    height: 100%;
}
a {
    text-decoration: none;
    color: inherit;
}
.main {
    max-width: 1200px;
    margin: 0 auto;
}

* {
    padding: 0;
    margin: 0;
}

body {
    background: #ece9e4;
    padding-top: 0;
}

.spacer {
    flex: 1;
}
</style>
