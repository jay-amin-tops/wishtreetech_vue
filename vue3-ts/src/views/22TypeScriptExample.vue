<script lang="ts" setup>
import { defineComponent, reactive, ref } from "vue";

let data:number
let name:{
      default: 'John doe',
      type:string
    }


data = "data"


interface TODO {
  id: string;
  value: string;
}
interface TODOS {
  active: TODO[];
  completed: TODO[];
}
const randomId = (): string => {
  return `_${Math.random().toString(35).slice(2, 11)}`;
};
const todos = reactive<TODOS>({
      active: [
        { id: randomId(), value: 123 },
        { id: randomId(), value: "An uncompleted task" },
      ],
      completed: [{ id: randomId(), value: "Completed task" }],
    });
// import { ref } from 'vue';
// // type Period = "Today" | "This Week" | "This Month";
// const periods: Period[]=["Today","Test","This Week","This Month"] as const
// type Period = typeof periods[number]
// const selectedPeriod = ref<Period>("Today")
// function selectPeriod(period:Period) {
//   console.log("called");
  
//   selectedPeriod.value = period
// }




// import { toRefs, computed } from 'vue';
// const props = defineProps<{ count: number }>();
// const { count } = toRefs(props);
// const even = computed(() => (count.value % 2 === 0 ? 'even' : 'odd'));
</script>
<template>
<li class="item completed" v-for="todo in todos.completed" :key="todo.id">
    <span>{{ todo.value }}</span>
  </li>
<a href="https://dev.to/caio2k/working-with-props-declaration-in-vue-3-ts-included-4o4f">https://dev.to/caio2k/working-with-props-declaration-in-vue-3-ts-included-4o4f</a>
</template>

<style>

.is-active{
  font-size:20px;
  font-weight:bold;
  color:"green"
}
</style>