<template>
    <nav class="navbar">
        <div class="logo">
            <p id="logoimg">LARGESSE</p>
        </div>

        <ul class="links">
            <li><router-link>Food</router-link></li>
            <li>Shelter</li>
            <li>Clothing</li>
            <li>Community Service</li>
            <li>Animals</li>
        </ul>
        <div class="spacer"></div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    props: {
        msg: String,
    },
};
</script>

<style>
#logoimg {
    font-weight: bold;
}
.navbar {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}
.logo {
    flex: .2;
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
