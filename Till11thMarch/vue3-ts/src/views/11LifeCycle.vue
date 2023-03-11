<template>
  <h2>Life Cycle</h2>
  <button  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="showLifeCycle=!showLifeCycle">Toggle</button>
  <div v-if="showLifeCycle">
    <VueLifeCycleChild></VueLifeCycleChild>
  </div>
</template>
<script>
import {ref} from "vue"
import VueLifeCycleChild from "./12LifeCycleMethods"
export default {
  components:{
    VueLifeCycleChild
  },
  setup() {
    let showLifeCycle = ref(false)
    console.log("setup called 11life cycle");
    return {
      showLifeCycle
    }
  },
  data() {
    return {
      lastname: "Testing",
      counting: "Test",
    }
  },
}
</script>

<style>
</style>