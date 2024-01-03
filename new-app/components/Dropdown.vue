<template>
    <div class="dropdown">
        <span class="title">{{ title }}</span>
        <div class="dropdown-content">
            <div v-for="item in content" class="dropdown-content-item">
                <a class="link" :href="item.link">{{ item.title }}</a>
            </div>
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
    width: 160px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    cursor: pointer;
}

.dropdown-content {
    display: none;
    position: absolute;
    width: 160px;
    z-index: 1;
    top: 100%;
}

.dropdown-content-item {
    display: flex;
    align-items: center;
    min-height: 2rem;
}

.dropdown:hover .dropdown-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.title {
    font-size: 2rem;
}

.link {
    color: white;
    text-decoration: none;
    font-size: 2rem;
}

.link:visited {
    color: white;
}
</style>
