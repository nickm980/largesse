<template>

    <nav class="navbar">
        <NavLinks class="m"></NavLinks>
        <div class="spacer"></div>
        <router-link to="/create"><button>CREATE EVENT</button></router-link>
    </nav>
</template>

<script>
import NavLinks from './NavLinks.vue';
export default {
    name: "NavBar",
    components: {
        NavLinks
    }
};
</script>

<style scoped>
.m {
    margin-left: -1rem;
}
button {
    outline: none;
    background-color: transparent;
    border: 1px solid #a79987;
    padding: 1em;
    font-weight: bold;
    padding-left: 1.5em;
    padding-right: 1.5em;
    letter-spacing: 2px;
    font-size: .8rem;
}

button:hover {
    filter: brightness(0.8);
    cursor: pointer;
}
a {
    text-decoration: none;
    color: black;
    opacity: .6;
    font-weight: 700;
}

.navbar {
    margin-top: 20px;
    margin-left: -10px;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}

.links {
    margin: 0 auto;
    flex: 1;
}

.spacer {
    flex: .2;
}

li {
    float: left;
    margin-left: 1em;
    margin-right: 1em;
}

ul {
    list-style: none;
}
</style>
