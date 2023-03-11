<template>
  <button @click="show = !show">Toggle List</button>
  <button @click="list.push(list.length + 1)">Push Number</button>
  <button @click="list.pop()">Pop Number</button>
  <button @click="list.reverse()">Reverse List</button>

  <ul v-if="show && list.length">
    <li v-for="item of list" v-bind:key=item>{{ item }}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      list: [1, 2, 3]
    }
  }
}
</script>
<style>
</style>