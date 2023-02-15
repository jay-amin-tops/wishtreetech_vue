<template lang="">
    <div>
        <h1>{{val}}</h1>
        <input type="text" v-model="newval" class="form-control mt-2 mb-2" placeholder="Enter Value for change the value of test">
        <button class="btn btn-primary" @click="change_data"> change </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val:"test",
            newval : ""
        }
    },
    methods: {
      change_data(){
        this.val = this.newval;
      }  
    },
}
</script>
<style lang="">
    
</style>