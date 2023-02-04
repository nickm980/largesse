<template>
  <div>
    <section class="content">
      <NavBar></NavBar>
      <div>
        <h1>NAME</h1>
        <p>A platform to find volunteers and to volunteer in your local neighborhood.</p>
      </div>
    </section>
    <img src="@/assets/home_bg.jpg">
  </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';

  export default {
    name: 'App',
    props: {
      msg: String
    },
    components: {
      Navbar
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>

  body {
    background: #eeebe6;
  }
  img {
    width: min(100%, 1000px);
    position: absolute;
    right: 0;
    bottom: 0;
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
  