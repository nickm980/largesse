<template>
    <nav class="navbar">
        <span>About</span>
        <span>Shelters</span>
        <span>More Stuff</span>
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
.navbar {
    display: flex;
    gap: 1rem;
}
</style>
