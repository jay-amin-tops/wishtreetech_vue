<template lang="">
    <div>
        Child compo
        {{ state.variable_name }}
        <br>
        <button @click="state.variable_name='Change'" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click</button>
        <br>
        <button @click="state.status=!state.status" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded">Click {{ state.status }}</button>
    </div>
</template>
<script>
import {onBeforeMount,onMounted,onBeforeUpdate,onBeforeUnmount,onUpdated,onUnmounted,reactive} from "vue";
export default {
    setup() {
        console.log("setup 12 life cycle");
        const state = reactive({
            variable_name:"Welcome",
            status:true
        })
        onBeforeMount(()=>{
            console.log("onBeforeMount");
        })
        onMounted(()=>{
            console.log("onMounted");
        })
        onBeforeUpdate(()=>{
            console.log("onBeforeUpdate");
        })
        onUpdated(() => {
            console.log("onUpdated");  
        })
        onBeforeUnmount(() => {
            console.log("onBeforeUnmount");    
        })
        onUnmounted(() => {
            console.log("onUnmounted");
        })
        return{
            state
        }
    }
}
</script>
<style lang="">
    
</style>