<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloW msg="Welcome to Your Vue.js App"/>
  <HelloW msg="Welcome to diff Vue.js App"/>
  <HelloW msg="Welcome to values Vue.js App"/>
  <HelloW msg="Welcome to test Vue.js App"/>
  <HelloW msg="Welcome to same Vue.js App"/>
</template>

<script>
import HelloW from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloW
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
