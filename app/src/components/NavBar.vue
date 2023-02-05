<template>

    <nav class="navbar">
        <div class="logo">
            <img id="logoimg" src="@/assets/logo.jpg">
        </div>

        <ul class="links">
            <li><router-link to="/service/food">Environment</router-link></li>
            <li><router-link to="/service/shelter">Animal Care</router-link></li>
            <li><router-link to="/service/clothing">Social</router-link></li>
            <li><router-link to="/service/animals">Healthcare</router-link></li>
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

<style scoped>
a {
    text-decoration: none;
    color: black;
    opacity: .6;
    font-weight: 700;
}

#logoimg {
    top: 15px;
    margin-left: -15px;
    left: 50px;
    width: 200px !important;
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
