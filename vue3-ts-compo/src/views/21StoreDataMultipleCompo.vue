<template lang="">
    <div class="bg">
      <ComponentA/>
      <ComponentB/>
      {{ store.count }}
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="store.increment()">
      increment store data
      </button>
    </div>
</template>
<script setup >
import { store } from './store.js'
import {defineProps} from 'vue';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
defineProps(['value'])
</script>
<style>
    .bg{
      background-color:teal;
      padding:20px
    }
</style>