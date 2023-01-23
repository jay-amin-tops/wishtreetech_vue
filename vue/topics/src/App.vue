<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloW/>
  <div class="container">
    <div class="row"> 
      <div class="col">
        <CustomCard cardtitle="Believing is seeing"/>
      </div>
      <div class="col">
        <CustomCard cardtitle="Believing is seeing"/>
      </div>
      <div class="col">
        <CustomCard cardtitle="Believing is seeing"/>
      </div>
      <div class="col">
        <CustomCard cardtitle="Believing is seeing"/>
      </div>
      <div class="col">
        <CustomCard cardtitle="Believing is seeing"/>
      </div>
    </div>
  </div>
</template>

<script>
import HelloW from './components/HelloWorld.vue'
import CustomCard from './components/CustomCard'

export default {
  name: 'App',
  components: {
    HelloW,
    CustomCard
  }
}
</script>


<style scoped>
.container{
  width:1100px;
  margin:0 auto;
}
.d-flex{
  display:flex;
}
.col{
  width:22%;
  margin:10px;
  /* display:inline; */
  /* display:inline-block; */
  /* border:1px solid; */
  /* padding:50px; */
}
.row{
  display:flex;
  flex-wrap: wrap;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* text-align: center; */
  margin-top: 60px;
}
</style>
