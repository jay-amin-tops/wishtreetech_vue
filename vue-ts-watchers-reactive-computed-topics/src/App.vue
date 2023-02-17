<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloW/>
  <CustomCardWithData/> -->
  <nav class="navbar">
    <ul class="menu-items">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About us</router-link></li>
      <li><router-link to="/example">Example</router-link></li>
    </ul>
  </nav>
  <div class="container m-auto">
  
  <HeaderComponent/>

    <router-view ></router-view>
  </div>
</template>

<script lang="ts">
</script>


<style scoped>
.navbar{
  background:grey
}
.navbar li a {
  padding:20px;
  display:inline-block;
}
.navbar li a:hover {
  background:darkgrey;
  color:white;
}
.menu-items li{
  display:inline-block;
}
.link{
  color:#003785;
}
</style>