<template>
    <ul class="links">
        <li><DropDown :links="[
            {'name': 'Climate Change', 'to': 'a'}
            ,{'name': 'Farm Work', 'to': 'b'}
            ,{'name': 'Environmental Conservation', 'to': 'b'}
            ,{'name': 'Permaculture Projects', 'to': 'b'}

            ]">Environment</DropDown></li>
        <li><DropDown :links="[]">Environment</DropDown></li>
        <li><DropDown :links="[]">Environment</DropDown></li>
        <li><DropDown :links="[]">Environment</DropDown></li>
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

ul {
    list-style: none;
}
</style>