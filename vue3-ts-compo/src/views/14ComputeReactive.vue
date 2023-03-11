<script setup>
import { reactive,computed,ref } from 'vue'

const state = reactive({ count: 0 })
const firstName = ref('John')
const lastName = ref('Doe')

function increment() {
  state.count++;
}
const fullName = computed({
  // getter
  get() {
    console.log("get called");
    return firstName.value + ' ' + lastName.value
    },
    // setter
    set(newValue) {
      console.log("set called");
        console.log(newValue);
        // Note: we are using destructuring assignment syntax here.
        firstName.value = newValue
        // [firstName.value,lastName.value] = newValue.split(' ')
    }
})
</script>
<template>
    {{state.count}}
    <button @click="increment">
    {{ state.count }}
  </button>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="fullName='test testing'">Click {{firstName}}</button>
  {{fullName}}
  <p>firstName : {{firstName}}</p>
  <p>lastName : {{lastName}}</p>
</template>