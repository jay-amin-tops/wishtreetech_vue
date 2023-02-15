<template lang="">
    <div>
        <h2 v-show="val">show & hide</h2>
        <button class="btn btn-primary" @click="val=!val">click</button>
    </div>
</template>


<script>
export default {
    data() {
        return {
            val:true,
        }
    },
}
</script>


<style lang="">
    
</style>