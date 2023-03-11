<template lang="">
<div class="container mt-2 border border-primary p-2">
    <h1>
        <p class="text-center">Login form</p>
    </h1>
    <hr class="">
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" v-model="user.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>

        <button type="button" @click="print" class="btn btn-primary mt-2">Submit</button>
        <h2 v-if="val">{{user}}</h2>
    </form>
</div>
</template>

<script>
export default {
data() {
    return {
        // email : '',
        // password : '',
        val:false,
        user:{
            email:'',
            password:'',
        }
    }
},
methods: {
    print(){
        // console.log(this.user.email);
    if(this.user.email.length>0)
        this.val = !this.val
    }
},

}
</script>

<style lang="">

</style>
