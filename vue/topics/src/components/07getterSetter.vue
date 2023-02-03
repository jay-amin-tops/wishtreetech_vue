<template>
  <p>Fullname with getter setter</p>
<span>{{ fullname }}</span>
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