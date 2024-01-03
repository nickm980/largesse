<template>
    <div id="container">
        <NuxtLink to="/">
            <img id="image" src="/static/logo.jpg" />
        </NuxtLink>
        <Dropdown
            v-for="item in data"
            :title="item.title"
            :content="item.content"
        />
    </div>
</template>

<script setup>
const data = [
    {
        title: "Environment",
        content: [
            { title: "Climate Change", link: "/events/climate" },
            { title: "test2", link: "link2" },
        ],
    },
    {
        title: "Animals",
        content: [
            { title: "test1", link: "link1" },
            { title: "test2", link: "link2" },
        ],
    },
    {
        title: "Social",
        content: [
            { title: "test1", link: "link1" },
            { title: "test2", link: "link2" },
        ],
    },
    {
        title: "Health Care",
        content: [
            { title: "test1", link: "link1" },
            { title: "test2", link: "link2" },
        ],
    },
    {
        title: "Other",
        content: [
            { title: "test1", link: "link1" },
            { title: "test2", link: "link2" },
        ],
    },
];
</script>

<style>
#container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#image {
    max-width: 200px;
}
</style>
