<template>
    <div class="dropdown">
        <span>{{ title }}</span>
        <div class="dropdown-content">
            <h1 v-for="item in content">
                <a class="link" :href="item.link">{{ item.title }}</a>
            </h1>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["title", "content"]);
</script>

<style>
.dropdown {
    position: relative;
    display: inline-block;
    background: purple;
    width: 160px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    cursor: pointer;
}

.dropdown-content {
    display: none;
    position: absolute;
    background: blue;
    width: 160px;
    z-index: 1;
    top: 100%;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.link {
    color: white;
}

.link:visited {
    color: white;
}
</style>
