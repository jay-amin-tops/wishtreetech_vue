<template lang="">
    <div>
        child data
        {{props.title }}
    </div>
</template>
<script setup >
import { defineProps,onMounted } from 'vue'
// const props = defineProps(['title'])
const props = defineProps({
  title: {
      type: String,
      default: 'No content found!'
  },
  sayHi:function () { alert("called")  }
 })
function testing() {
    console.log("called");
    console.log(props);
    // props.sayHi();
}
onMounted(() => {
    setTimeout(function () {
        testing()
    }, 3000);
  console.log(`the component is now mounted.`)
})
</script>
<style lang="">
    
</style>