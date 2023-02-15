<template lang="">
    <div>
        <h1>Child component</h1>
        <h2>{{name}}</h2>
        <button v-on:click="getdata(val)" >click</button>
    </div>
</template>


<script>
export default {
    props:{
        name:String,
        getdata:Function
    },
    data() {
        return {
            val:"data from child component"
        }
    },
    
}
</script>
<style lang="">
    
</style>