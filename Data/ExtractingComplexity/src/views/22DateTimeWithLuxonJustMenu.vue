<script lang="ts" setup>
// import { ref } from 'vue';
// type Period = "Today" | "This Week" | "This Month";
// const periods: Period[]=["Today","This Week","This Month"]

// const selectedPeriod = ref<Period>("Today")
// function selectPeriod(period:Period) {
//   console.log("called");
  
//   selectedPeriod.value = period
// }


import { ref } from 'vue';
// type Period = "Today" | "This Week" | "This Month";
const periods: Period[]=["Today","This Week","This Month"] as const
type Period = typeof periods[number]
const selectedPeriod = ref<Period>("Today")
function selectPeriod(period:Period) {
  console.log("called");
  
  selectedPeriod.value = period
}




// import { toRefs, computed } from 'vue';
// const props = defineProps<{ count: number }>();
// const { count } = toRefs(props);
// const even = computed(() => (count.value % 2 === 0 ? 'even' : 'odd'));
</script>
<template>

<a v-for="period of periods"
:key = "period"
:class = "{'is-active':period == selectedPeriod}"
@click="selectPeriod(period)"

>
  {{ period }}
</a>
</template>

<style>

.is-active{
  font-size:20px;
  font-weight:bold;
  color:"green"
}
</style>