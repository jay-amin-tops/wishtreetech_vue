<script setup>
import { ref, watch } from 'vue'

const Counter = ref(0)
watch(Counter, (newCounter,oldCounter) => {
    console.log("new value ",newCounter,"prev value ",oldCounter);
    if (newCounter > 50) {
        console.log("not applicable");
    } else {
        console.log("valid");
    }
})


</script>
<!-- <script>
import { ref, watch } from 'vue'

export default {
    // data() {
    //     return {
    //         counter:0,
    //     }
    // },
    setup() {
      const data = ref(0)
      const counter = ref(0)
      const question = ref('')
      const answer = ref('Questions usually contain a question mark. ;-)')
      watch(data, async () => {
        console.log("called");
        })
      watch(counter, async () => {
        console.log("called counter watch");
        })
      return {
        question,
        answer,
        data,
        counter
        }
    },
  }
</script> -->

<template>
  <p>
    <!-- Ask a yes/no question: <input v-model="question" />
    <button @click="data=data+1">Click {{data}}</button> -->
    watcher
    <br>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="Counter=Counter+10">Click {{Counter}}</button>
    Counter  : {{Counter}}
    <br>
  </p>
</template>