<script lang="ts" setup>
import { ref } from 'vue';
import { DateTime } from 'luxon';
import { Post, today, thisWeek, thisMonth } from "../posts.ts";
// import Data from "../posts.ts";
// console.log(Data);
// console.log(Data.thisMonth);
// return false
const periods=["Today","This Week","This Month"] as const
type Period = typeof periods[number]
const selectedPeriod = ref<Period>("Today")
function selectPeriod(period:Period) {
  console.log("called");
  selectedPeriod.value = period
}
//For Date Formate
// const posts:Post[]=["today","thisWeek","thisMonth"]  //simple string
const posts:Post[]=[today,thisWeek,thisMonth].map(anything=>{
  return{
    ...anything,created:DateTime.fromISO(anything.created)
  }
}) 
</script>
<template>
<hr>
  <a v-for="period of periods"
  :key = "period"
  :class = "{'is-active':period == selectedPeriod}"
  @click="selectPeriod(period)"> {{ period }}</a>
<hr>


 <a v-for="post of posts" :key=
 post.id class="panel">
  {{post.title}}
  <!-- {{post.created}} -->
  {{post.created.toFormat("d-MMM-y")}}
 </a>
</template>

<style>

.is-active{
  font-size:20px;
  font-weight:bold;
  color:"green"
}
.panel{
  display:block;
  width:50%;
  margin:10px auto;
  padding:10px;
  box-shadow:2px 2px 8px grey
}
</style>