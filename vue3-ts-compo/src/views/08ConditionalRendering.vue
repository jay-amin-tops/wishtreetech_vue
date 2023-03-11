<template>
  <h1 v-if="awesome">Vue is awesome!</h1>
  
  <button @click="awesome = !awesome">Toggle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>


  <div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>


  <h1 v-show="ok">Hello!</h1>
  
</template>
<script>
export default {
  data() {
    return {
      firstname: "Test",
      lastname: "Testing",
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