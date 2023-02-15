<template lang="">
    <div>
        time out example
        <!-- {{ JSON.stringify(loader)  }} -->
        <br>
        <div :class="[data.loader ? 'activeClass' : 'inactive']">something</div>

        {{ data.loader  }}  
        <div v-if="data.loader">
            <div class="loader-disp">
            </div> 

        </div>
        <div v-else>
            data
        </div>
    </div>
</template>

<script setup>
import { onMounted,reactive } from 'vue'
// let loader = ref(true)
const data = reactive({loader:true})

function sayHi() {
    data.loader=false
    data.loader
    console.log("called say hi",data.loader);
}
onMounted(() => {
    setTimeout(function () {
        sayHi()
    }, 3000);
  console.log(`the component is now mounted.`)
})
// import {onBeforeMount,onMounted,reactive} from "vue";
//     // sayHi=()=> {
//     //   var v = this;
//     //   setTimeout(function () {
//     //     v.message = "Hi Vue!";
//     // }, 3000);
//   export default {
//     setup() {
//         console.log("setup 12 life cycle");
//         const state = reactive({
//             variable_name:"Welcome",
//             status:true
//         })
//         onBeforeMount(()=>{
//                this.sayHi()
//             console.log("onBeforeMount");
//         })
//         onMounted(()=>{
//             console.log("onMounted");
//         })
//         return{
//             state
//         }
//     }
// }
</script>
<style lang="">
    
</style>