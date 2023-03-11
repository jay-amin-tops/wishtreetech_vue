<template>

    <!-- <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./../assets/logo.png" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ card_title }}</h5>
            <p class="card-text">Some quick example text to build on the card title and    make up the bulk of the card's content.</p>
            <p>{{ name }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div> -->

    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./../assets/logo.png" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">kfdkgdgfdk</h5>
            <p class="card-text">{{ product.desc }}</p>
            <p>{{ product.name }}</p>
            <button type="button" class="btn" v-on:click="togle()">Add to Cart</button>
            <!-- <button type="button" class="btn" @click="counter++">Add to Cart</button> -->
        </div>
    <!-- <p>{{ $root.counter }}</p> -->
    </div>
</template>


<script>
// let arr = new Array();
export default {
    name: 'card',
    data() {
        return {
            arr:[],
            name: "vishal",
            cou:0,
        }
    },
    props: ['product'],
    methods: {
        togle(){
            // this.counter++
            // arr.push(this.counter);
            // console.log(arr.length);
            this.$root.counter++
            this.arr.push(this.cou++)
            console.log("lenght = ",this.arr.length);
            console.log("Array = ",this.arr);
        }

    },
   
}
</script>

<style>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 40%;
    border-radius: 5px;
    margin: 5px;
}

.btn{
    background-color: cadetblue;
    color: white;
    border-radius: 5px;
    width: 100px;
    height: 35px;
    margin: 15px;
}




</style>