<template>
    <div id="outermost-container_">
        <NavBar />
        <slot />
        <Footer />
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    background: black;
    color: white;
}

#outermost-container_ {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
