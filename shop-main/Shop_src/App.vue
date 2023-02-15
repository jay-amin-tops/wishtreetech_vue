<template>
<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<div class="container">
    <!-- <h1>{{ counter }}</h1> -->
    <div class="row">
        <!-- <card 
            v-for="product in products" :key="product" :product="product" />
        <card/> -->


        <!-- <card card_title = "Card Title"/>
        <card card_title = "Card Title"/>
        <card card_title = "Card Title"/>
        <card card_title = "Card Title"/>
        <card card_title = "Card Title"/>
        <card card_title = "Card Title"/>
        <card card_title = "Card Title"/> -->


        <!-- <Attribute_binding/> -->

        <!-- <Button_togle_computed/> -->
        <!-- <Togle_show/> -->
        <!-- <home/> -->
        <!-- <p class="text-gray-500 text-lg ">
            Vue and Tailwind CSS in action
        </p> -->
        <!-- <Login_form /> -->

        <!-- <Reactivity_example /> -->
        <!-- <Change_data_btnclick /> -->
        <!-- <Login_form_new /> -->
        <!-- <Time_out_example /> -->
        <!-- <Time_out_main /> -->
        
    </div>
    <ul class="flex space-x-2">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
    </ul>
    <router-view />


</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import card from './components/card.vue'
// import Attribute_binding from './components/attribute_binding.vue';

// import Time_out_example from './components/time_out_example.vue';
// import Time_out_main from './components/time_out_main.vue';

// import Login_form_new from './components/login_form_new.vue';

// import Change_data_btnclick from './components/change_data_btnclick.vue';

// import Reactivity_example from './components/reactivity_example.vue';

// import Button_togle_computed from './components/button_togle_computed.vue';
// import Togle_show from './components/togle_show.vue';
// import home from './components/home.vue'
// import Login_form from './components/login_form.vue';


export default {
    name: 'App',
    components: {
},
    data() {
        return {
            counter: 0,
            products: [{
                    name: "Product1",
                    desc: "knfdfdd"
                },
                {
                    name: "Product2",
                    desc: "knfdfdd"
                },
                {
                    name: "Product3",
                    desc: "knfdfdd"
                },
                {
                    name: "Product4",
                    desc: "knfdfdd"
                },
                {
                    name: "Product5",
                    desc: "knfdfdd"
                },
                {
                    name: "Product6",
                    desc: "knfdfdd"
                },

            ]
        }
    },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

.row{
    display: flex;
    flex-wrap: wrap;

} */
</style>
