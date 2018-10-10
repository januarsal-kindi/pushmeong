<template>
  <b-navbar toggleable="md" variant="primary" type="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">  
      <img src="http://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png" width="30" class="d-inline-block align-top" alt="BV">
      PushMeong
    </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">Feed</b-nav-item>
      <b-nav-item href="#" >Disabled</b-nav-item>
    </b-navbar-nav>


    <!-- Right aligned nav items -->
  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
