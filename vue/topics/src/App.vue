<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloW/>
  <CustomCardWithData/> -->
  <nav class="navbar">
    <ul class="menu-items">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About us</router-link></li>
    </ul>
  </nav>
  <div class="container m-auto">
    <ul>
      <li><router-link class="link" to="/lifecycle">Life Cycle</router-link></li>
      <li><router-link class="link" to="/watcher">Watcher</router-link></li>
      <li><router-link class="link" to="/compouted">computed</router-link></li>
    </ul>

    <router-view ></router-view>
  </div>
</template>

<script>
// import HelloW from './components/01HelloWorld.vue'
// import CustomCard from './components/02CustomCard'
// import CustomCardWithData from './components/03CustomCardWithData'
// import BindAttribute from './components/04BindAttribute'
// import Conditions from './components/05Conditions'
// import ComputedExample from './components/06computedCompo'
// import GetterSetter from './components/07getterSetter'
// import ConditionalRendering from './components/08ConditionalRendering'
// import ClickHandle from './components/09ClickHandle'
// HelloW,
// CustomCard,
// CustomCardWithData,
export default {
  name: 'App',
  components: {
  }
}
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
