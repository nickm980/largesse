<template>
    <div class="main">
        <p class="subtitle">BUILDING A BETTER WORLD</p>
        <h1 class="title">LARGESSE</h1>
        <p class="description">
            A platform to find volunteers and to volunteer in your local
            neighborhood. Aiding each other to build a better planet, for the
            local Binghamton community.
        </p>
        <div class="buttons">
            <NuxtLink to="/create">
                <button id="create-event-button">CREATE AN EVENT</button>
            </NuxtLink>
            <NuxtLink to="volunteer">
                <button id="volunteer-button">VOLUNTEER</button>
            </NuxtLink>
        </div>
    </div>
    <img src="/static/home.png" />
</template>

<style scoped>
.main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin-left: 10rem;
}

.title {
    font-size: 4rem;
    font-weight: 100;
    letter-spacing: 0.8rem;
    line-height: 1.1;
}
.subtitle {
    letter-spacing: 5px;
    line-height: 1.2rem;
}

.description {
    line-height: 1.75em;
    max-width: 450px;
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
    font-size: 0.8rem;
}

#create-event-button {
    background-color: #9e9377;
    color: #eeebe6;
}

#volunteer-button {
    background-color: #5f5b47;
    color: #eeebe6;
    margin-left: 10px;
}

button:hover {
    background-color: #5f5b47 !important;
    color: #ece9e4 !important;
    cursor: pointer;
}

img {
    width: min(100%, 1350px);
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
}
</style>
