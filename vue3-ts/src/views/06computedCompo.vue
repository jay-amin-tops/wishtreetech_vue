<template>
  <p>Has published books:</p>
<span>{{ publishedBookMessage }}</span>
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }">data</div>
<div :style="{ color:'grey', fontSize: fontSize + 'px' }">data</div>
<div :style="styleObject">Testing styled object</div>
<div :style="[baseStyles, styleObject]">Something</div>

</template>
<script>
export default {
  data() {
    return {
      name: "Test",
      fontSize:50,
      activeColor:"blue",
      list: [
        'vue 2 advance guide', 
        'vue 3 basic guide', 
        'vue 4 the mystery', 
      ],
      styleObject: {
      color: 'red',
      fontSize: '13px'
    },
    baseStyles: {
      backgroundColor: 'orange'
    }
    }
  },
  computed:{
    publishedBookMessage(){
      console.log(this.list.length);
      return this.list.length> 0 ? 'Yes' : 'No'
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