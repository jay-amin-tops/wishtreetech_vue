<template>
<div main>
    <h1>Login Form</h1>
    <!-- {{ form }} -->
    {{ error }}
    <form>

        
        <br><br>
        <label for="email">Email : </label>
        <input type="text" name="email" id="email" v-model="form.email">
        <br><br>

        <label for="password">Password : </label>
        <input type="password" name="password" id="password" v-model="form.password">
        <br><br>

        <select v-model="form.country">
            <option value="India">India</option>
            <option value="UAS">UAS</option>
            <option value="Canada">Canada</option>
        </select>
        <br><br>

        <label for="gender">Gender : </label>
        <input type="radio" name="gender" value="Male" id="gender" v-model="form.gender">Male
        <input type="radio" name="gender" value="Female" id="gender2" v-model="form.gender">Female
        <br><br>

        <label for="technology">.Net </label>
        <input type="checkbox" value=".Net" v-model="form.technology">
        <br><br>
        <label for="technology">Java </label>
        <input type="checkbox" value="Java" v-model="form.technology">
        <br><br>

        <button type="button" v-on:click="getdata(),display()" class="btn btn-success">Click</button>
        <button type="button" class="btn btn-primary">Primary</button><br><br><br>
        <i class="fa fa-home text-success fa-4x"></i><br><br>

    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
                country: '',
                gender: '',
                technology: [],

            },
            error: [],
        }
    },
    methods: {
        getdata() {
            console.log(this.form);
        },
        display() {
            this.error=[]
            for(const item in this.form){
                if(this.error==="" || this.form[item].length===0){
                    this.error.push(item)
                }
                
            }
        }

    },
}
</script>

<style>
.btn {
    background-color: burlywood;
    width: 100px;
    border-radius: 5px;
    height: 30px;
}

.main {
    width: 1200px;
}

form {
    background-color: bisque;
}

h1 {
    background-color: aliceblue;
}

</style>
