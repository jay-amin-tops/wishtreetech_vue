<script setup>
import ComponentA from './18childCompo.vue'
function sayHi() {
    console.log("called say hi");
}
</script>

<template>
  <!-- <ComponentA title="sayHi" :function="sayHi" /> -->
  <ComponentA title="sayHi" :function="sayHi" />
</template>