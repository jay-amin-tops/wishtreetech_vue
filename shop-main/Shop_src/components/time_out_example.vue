<template lang="">
<div>
    <img v-if="val" src="../assets/loading-gif.gif" alt="loading" srcset="">
    <h1>kfklsnfkldlsknsf</h1>
</div>
</template>

<script>
export default {
    data() {
        return {
            val: true,
        }
    },
    methods: {

        callFunction: function () {
            var v = this;
            setTimeout(function () {
                v.val = false
            }, 1000);

        },
    },
    beforeMount(){
        this.callFunction()
    },
    // onMounted(){
    //     this.callFunction()
    // },
}
</script>

<style lang="">

</style>
