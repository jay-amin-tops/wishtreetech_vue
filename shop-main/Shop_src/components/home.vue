<template lang="">
<div>
    <!-- <child name="vishal" :getdata="getdata"/>
    <h2>{{data}}</h2> -->

    <ul>
        <li v-for="item in users" ::key="item">
            <!-- {{item.name}} {{item.email}} -->
            <user :item="item" />
        </li>
    </ul>

    <!-- example of ref -->
    <!-- <div class="container w-50">
        <input class="form-control" type="text" ref="input">
        <button class="btn btn-primary mt-2 mb-2" v-on:click="getref()">click here for focus</button>
    </div> -->

</div>
</template>

<script>
// import child from './child.vue';
import user from './user.vue'
export default {
    name: "home",
    data() {
        return {
            data: "",
            users: [{
                    name: "vishal",
                    email: "vp@gmail.com"
                },
                {
                    name: "vishal",
                    email: "vp@gmail.com"
                },
                // {
                //     name: "vishal",
                //     email: "vp@gmail.com"
                // },
                // {
                //     name: "vishal",
                //     email: "vp@gmail.com"
                // }
            ]
        }
    },
    components: {
        // child,
        user
    },
    methods: {
        getdata(val) {
            this.data = val;
        },
        // ref 
        getref() {
            // console.log("vishal")
            this.$refs.input.focus();
            this.$refs.input.style.color = "blue";
            let val;
            val = this.$refs.input.value;
            console.log(val)
        }
    },
}
</script>

<style>

</style>
