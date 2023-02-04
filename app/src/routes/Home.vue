<template>
  <div class="main">
    <section class="content">
      <NavBar></NavBar>
      <div class="desc">
        <p class="description">VOLUNTEER | COMMUNITY SERVICE</p>
        <h1>LARGESSE</h1>
        <p>A platform to find volunteers and to volunteer in your local neighborhood. Aiding each other to build a better planet. </p>
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
  .aligned {
    margin-top: 1em;
  }
  .description {
    opacity: .5;
  }
  p {
    margin-top: .5em;
  }
  button {
    outline: none;
    background-color: transparent;
    border: 1px solid #a79987;
    padding: 1em;
    font-weight: bold;
    padding-left: 1.5em;
    padding-right: 1.5em;
    text-transform: capitalize;
  }
button:not(#find){
  background-color: #a79987;
  color: #eeebe6;
}
  #find {
    margin-left: 10px;
  }
  button:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
  .desc {
    margin-top: 10em;
  }
  .desc p {
    max-width: 400px;
    opacity: .8;
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
  