<template>
  <div class="main">
    <section class="content">
      <NavBar></NavBar>
      <div class="desc">
        <b>VOLUNTEER | COMMUNITY SERVICE</b>
        <h1>LARGESSE</h1>
        <p>A platform to find volunteers and to volunteer in your local neighborhood.</p>
        <div class="aligned">
          <button>Offer Services</button>
          <button id="find">Find Volunteers</button>
        </div>
      
      </div>
    </section>
    <img src="@/assets/home_bg.jpg">
  </div>
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue';

  export default {
    name: 'App',
    props: {
      msg: String
    },
    components: {
      NavBar
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  button {
    outline: none;
    background-color: transparent;
    border: 1px solid #806858;
    padding: 1em;
  }
button:not(#find){
  background-color: #806858;
  color: #eeebe6;
}
  #find {
    margin-left: 10px;
  }
  button:hover {
    background-color: #806858;
    cursor: pointer;
  }
  .desc {
    margin-top: 10em;
  }
  .desc p {
    max-width: 400px;
  }
  .main {
    max-width: 1400px;
    margin: 0 auto;
  }

  img {
    width: min(100%, 1000px);
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
  