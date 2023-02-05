<template>
    <ul class="links">
        <li class="first">
            <DropDown :links="[
                { 'name': 'Climate Change', 'to': 'climate' }
                , { 'name': 'Farm Work', 'to': 'farm' }
                , { 'name': 'Environmental Conservation', 'to': 'conservation' }
                , { 'name': 'Permaculture Projects', 'to': 'permaculture' }
            
            ]">Environmental</DropDown>
        </li>
        <li>
            <DropDown :links="[
                { 'name': 'Animal Farms', 'to': 'farms' }
                , { 'name': 'Wildlife Conservation', 'to': 'conservation' }
                , { 'name': 'Animal Rescue', 'to': 'rescue' }
                , { 'name': 'Animal Care', 'to': 'care' }
            
            ]">Animals</DropDown>
        </li>
        <li>
            <DropDown :links="[
                { 'name': 'Volunteering with Young People', 'to': 'young' }
                , { 'name': 'Teaching and Education', 'to': 'education' }
                , { 'name': 'Community Development', 'to': 'community' }
                , { 'name': 'Women’s Equity and Gender Empowerment', 'to': 'gender' }
            
            ]">Social Sector</DropDown>
        </li>
        <li>
            <DropDown :links="[
                { 'name': 'Volunteering with the Eldery', 'to': 'elderly' }
                , { 'name': 'Counseling', 'to': 'counseling' }
                , { 'name': 'Holistic Centers', 'to': 'holistic' }
                , { 'name': 'Clinics', 'to': 'clinics' },
                , { 'name': 'Mental Health', 'to': 'mental' },
                , { 'name': 'Food Pantry', 'to': 'food' }
                , { 'name': 'Shelters', 'to': 'shelters' },
                , { 'name': 'Clothing', 'to': 'clothing' },
            ]">Health Care & Other</DropDown>
        </li>
    </ul>
</template>

<script>
import DropDown from './DropDown.vue';

export default {
    name: 'NavLinks',
    components: {
        DropDown
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #8e8c89;
    font-weight: bold;
    padding: .5em;
    font-size: .8rem;

}

#logoimg {
    margin-top: 30px;
    margin-left: -15px;
    left: 50px;
    width: 200px !important;
}

.navbar {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}

.logo {
    flex: .2;
}

.links {
    margin: 0 auto;
    flex: 1;
}

.spacer {
    flex: .2;
}

li {
    float: left;
    margin-left: 1em;
    margin-right: 1em;
}

.first {
    margin-left: 0;
}

ul {
    list-style: none;
}
</style>