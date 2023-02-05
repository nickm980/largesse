<template>
    <div @click="toggle" class="dropdown" :class="{dropdownActive : active}">
        <button class="button">
            <slot /> <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </button>
        <div class="links" v-if="active">
            <font-awesome-icon class="icon" icon="fa-solid fa-caret-up" />
            <div v-for="link in links" :key="link.name" class="link">
                <router-link class="router-link" :to="'/volunteer?q=' + link.to">{{ link.name }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropDown',
    props: {
        links: []
    },
    data() {
        return {
            active: false
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
        }
    }
}
</script>
<style scoped>
.icon {
    z-index: 1;
    font-size: 16px;
    position: absolute;
    top: -.6em;
    color: #e5e3df;
}
button {
    font-weight: bold;
    font-size: .8rem;
    border-radius: 5px !important;
    padding: .5em;
    outline: none;
    border: none;
    color: #bab8b2;
    background-color: transparent;
}
button:hover, .dropdownActive {
    cursor: pointer;
    border-radius: 5px !important;
    background-color: #e5e3df;
}
.link  {
    min-width: 100px;
    margin-bottom: .2em;
    padding: .5em;
    border-radius: 5px;
}
.link:hover {

    background-color: rgb(194, 187, 187)}
a {
    font-size: .8rem;
    padding: .5em;
}
button:hover .links {
    display: visible;
}

.links {
    z-index: 2;
    height: auto;
    min-width: 150px;
    background-color: #e5e3df;
    border-radius: 5px;
    color: grey;
    padding: .5em;
    margin-top: 1em;
    position: absolute;
}

.dropdown .button:hover .links {
    display: visible;
}
</style>