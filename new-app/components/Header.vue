<template>
    <div id="container">
        <img src="/static/logo.jpg" />
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
            { title: "test1", link: "link1" },
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
    justify-content: center;
    align-items: center;
    background: red;
}
</style>
