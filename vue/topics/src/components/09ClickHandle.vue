<template>
  <button @click="increment">
  {{ koibhi.count }}
</button>
{{counting}}
</template>
<script>
import { reactive,nextTick } from 'vue'
// import DirectData from './customData'

export default {
  setup() {
    console.log("setup called");
  const koibhi = reactive({ count: 0,otherdata:"sr" })
    function increment() {
      console.log("called");
      koibhi.count++
        this.counting = "Something"
        nextTick(() => {
          console.log("called inside next Tick");
          // access updated DOM
        })
    }
    return {
      koibhi,
      increment
    }
  },
  data() {
    console.log("data called");
    return {
      lastname: "Testing",
      counting: "Test",
    }
  },
  computed:{
      fullname:{
        get(){
          console.log("called get");
          return this.firstname+" "+this.lastname
        },
        set(newVal){
          console.log("called set");
          [this.firstname,this.lastname] = newVal.split('')
        }
      }
  }
}
</script>
<!-- export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
} -->
<style>
</style>