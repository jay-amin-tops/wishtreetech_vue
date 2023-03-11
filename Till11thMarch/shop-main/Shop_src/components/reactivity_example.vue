<template lang="">
    <div>
        <h1>Reactivity </h1>
        <h2>{{obj.count}}</h2>
        <button type="button" class="btn btn-primary" @click="increment()">Click</button>
    </div>
</template>
<script>

import {reactive} from 'vue'

export default {
        setup() {
            
            const obj = reactive({count:0})

            function increment(){
                obj.count++
            }
            
            return{
                obj,
                increment
            }
        },
    
}

</script>
<style lang="">
    
</style>