<template>

    <nav class="navbar">
        <div class="logo">
            <img id="logoimg" src="@/assets/logo.jpg">
        </div>

        <NavLinks></NavLinks>
        <div class="spacer"></div>
    </nav>
</template>

<script>
import NavLinks from './NavLinks.vue';

export default {
    name: "NavBar",
    components: {
        NavLinks
    },
};
</script>

<style scoped>

a {
    text-decoration: none;
    color: #8e8c89;
    font-weight: bold;
    padding: .5em;
    font-size: .8rem;

}

#logoimg {
    margin-top: 30px;
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
