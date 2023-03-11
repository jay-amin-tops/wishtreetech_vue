<template>
  <button @click="increment">
  {{ koibhi.count }}  
</button>
{{counting}}

<br/>
<button @click="incrementref">
    {{ count }} <!-- no .value needed -->
    test
  </button>
</template>
<script>
import { reactive,nextTick,ref } from 'vue'
// import DirectData from './customData'

export default {
  setup() {
    const koibhi = reactive({ count: 0,otherdata:"sr" })
    const count = ref(0)
    console.log("setup called");
    function incrementref() {
      console.log("incrementref");
      count.value++
      console.log(count);
      console.log(count.value);
    }
    function increment() {
      console.log("called");
      // console.log("Count ref",count);
      console.log("Count ref",count.value);
      koibhi.count++
        this.counting = "Something"
        nextTick(() => {
          console.log("called inside next Tick");
          // access updated DOM
        })
    }

    return {
      koibhi,
      increment,
      incrementref
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