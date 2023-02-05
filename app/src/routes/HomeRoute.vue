<template>
    <div class="main">
        <section>
            <NavBar></NavBar>
            <div class="desc">
                <p class="description">BUILDING A BETTER WORLD</p>
                <h1 class="title">LARGESSE</h1>
                <p class="notdesc">
                    A platform to find volunteers and to volunteer in your local
                    neighborhood. Aiding each other to build a better planet, for the local Binghamton community.
                </p>
                <div class="aligned">
                    <router-link to="/create">
                        <button>CREATE AN EVENT</button>
                    </router-link>
                    <router-link to="/volunteer">
                        <button id="find">VOLUNTEER</button>
                    </router-link>
                </div>
            </div>
        </section>
        <img src="@/assets/cropped2.jpg" />
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
    name: "App",
    props: {
        msg: String,
    },
    components: {
        NavBar,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aligned {
    margin-top: 2em;
}
a:hover {
    border-radius: 5px;
}
.notdesc {
    color: #bab8b2;
}
.description {
    
    letter-spacing: 5px;
    line-height: 1.2rem;
    color: #8c7e67;
}
p {
    line-height: 1.75em;
}
p {
    margin-top: 0.5em;
}
.title {
  margin-top: .5rem;
  color: #5f5b47;
  font-size: 4rem;
  font-weight: 100;
  letter-spacing: .8rem;
  line-height: 1.1;
}
button {
    outline: none;
    background-color: transparent;
    border: 1px solid #a79987;
    padding: 1em;
    font-weight: bold;
    padding-left: 1.5em;
    padding-right: 1.5em;
    letter-spacing: 2px;
    font-size: .8rem;
}
button:not(#find) {
    background-color: #9e9377;
    color: #eeebe6;
}
#find {
  background-color: #5f5b47;
  color: #eeebe6;
    margin-left: 10px;
}
button:hover {
    background-color: #5f5b47 !important;
    color: #ece9e4 !important;
    cursor: pointer;
}
.desc {
    margin-top: 5em;
}
.desc p {
    max-width: 450px;
    opacity: 0.8;
}
img {
    width: min(100%, 1350px);
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
