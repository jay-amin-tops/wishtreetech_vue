<script lang="ts" setup>
import MyButton from "./24MyButton.vue";
const onClick = ()=>{
  console.log("called btn click Parent ");
}
</script>
<template>
  Parent Compo
<!-- <MyButton data="large" /> -->
<MyButton class="effect"  @click="onClick" />
</template>

<style>
.large{
  background-color:blue
}
.checking{
  font-size:36px;
  color:white
}
</style>