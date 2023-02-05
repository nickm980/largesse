<template>
    
    <nav class="navbar">
        <div class="logo">
            <img src="@/assets/logo.jpg">
        </div>

        <ul class="links">
            <li><router-link to="/service/food">Food</router-link></li>
            <li><router-link to="/service/shelter">Shelter</router-link></li>
            <li><router-link to="/service/clothing">Clothing</router-link></li>
            <li><router-link to="/service/animals">Animals</router-link></li>
            <li><router-link to="/service/other">Other</router-link></li>
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
a {
    text-decoration: none;
    color: black;
    opacity: .6;
    font-weight: 700;
}
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
