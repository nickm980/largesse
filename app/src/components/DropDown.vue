<template>
    <div @click="toggle" class="dropdown" :class="{dropdownActive : active}">
        <button class="button">
            <slot /> <font-awesome-icon icon="fa-solid fa-chevron-down" />

        </button>
        <div class="links" v-if="active">
            <div v-for="link in links" :key="link.name">
                <router-link class="link" :to="'/volunteer?q=' + link.to">{{ link.name }}</router-link>
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
    data () {
      return {
        active: false
      }
    },
    methods: {
      toggle () {
        this.active = !this.active
      }
    }
}
</script>
<style scoped>
button {
    font-weight: bold;
    opacity: .4;
    font-size: .8rem;
    border-radius: 5px !important;
    padding: .5em;
    outline: none;
    border: none;
    background-color: transparent;
}
button:hover, .dropdownActive {
    cursor: pointer;
    border-radius: 5px !important;
    background-color: rgba(0, 0, 0, 0.058);
}
.link {
    margin-bottom: 1em;
    border: 1px solid green;
    padding: 1rem;
}
button:hover .links {
    display: visible;
}

.links {
    height: auto;
    min-width: 150px;
    background-color: rgba(0, 0, 0, 0.158);
    opacity: .5;
    border-radius: 5px;
    padding: .5em;
    margin-top: 1em;
    position: absolute;
}

.dropdown .button:hover .links {
    display: visible;
}
</style>