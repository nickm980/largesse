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
            { title: "Farm Work", link: "/events/farming" },
            {
                title: "Environmental Conservation",
                link: "/events/conservation",
            },
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
            { title: "Volunteering with Young People", link: "/events/young" },
            { title: "Teaching and Education", link: "/events/education" },
            { title: "Community Development", link: "/events/community" },
            {
                title: "Women's Equity and Gender Empowerment",
                link: "/eventsgender",
            },
        ],
    },
    {
        title: "Health Care",
        content: [
            { title: "Volunteering with the Elderly", link: "/events/elderly" },
            { title: "Counseling", link: "/events/counseling" },
            { title: "Holistic Centers", link: "/events/holistic" },
            { title: "Clinics", link: "/events/clinics" },
        ],
    },
    {
        title: "Other",
        content: [
            { title: "Mental Health", link: "/events/mental" },
            { title: "Food Pantry", link: "/events/food" },
            { title: "Shelters", link: "/events/shelters" },
            { title: "Clothing", link: "/events/clothing" },
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
