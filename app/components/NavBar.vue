<template>
    <div id="container">
        <NuxtLink to="/">
            <img id="image" src="/static/logo.jpg" />
        </NuxtLink>
        <Dropdown v-for="item in data" :title="item.title" :content="item.content" />
    </div>
</template>

<script setup>
const data = [
    {
        title: "Environment",
        content: [
            { title: "Climate Change", link: "/events/climate" },
            { title: "Farm Work", link: "/events/farming" },
            { title: "Environmental Conservation", link: "/events/conservation" },
            { title: "Permaculture Projects", link: "/events/permaculture" },
        ],
    },
    {
        title: "Animals",
        content: [
            { title: "Animal Farms", link: "/events/farming" },
            { title: "Wildlife Conservation", link: "/events/conservation" },
            { title: "Animal Rescue", link: "/events/rescue" },
            { title: "Animal Care", link: "/events/care" },
        ],
    },
    {
        title: "Social",
        content: [
            { title: "Volunteering with Young People", link: "young" },
            { title: "Teaching and Education", link: "education" },
            { title: "Community Development", link: "community" },
            { title: "Women's Equity and Gender Empowerment", link: "gender" },
        ],
    },
    {
        title: "Health Care",
        content: [
            { title: "Volunteering with the Elderly", link: "elderly" },
            { title: "Counseling", link: "counseling" },
            { title: "Holistic Centers", link: "holistic" },
            { title: "Clinics", link: "clinics" },
        ],
    },
    {
        title: "Other",
        content: [
            { title: "Mental Health", link: "mental" },
            { title: "Food Pantry", link: "food" },
            { title: "Shelters", link: "shelters" },
            { title: "Clothing", link: "clothing" },
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
