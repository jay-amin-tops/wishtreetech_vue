<template lang="">
<div>
    <!-- <h2 v-if="display" class="mt-4">Display conditionally</h2>
    <button @click="displayBoolean = !displayBoolean" class="btn btn-primary">Toogle</button><br><br> -->
    <!-- <button @click="count++" class="btn btn-primary">Add 1</button>
    <h3>Count is: {{ count }}</h3> -->
    <div v-if='display' class="container">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <br>
        <p>Has published books : </p>
        <p>{{ togle }}</p>
        <p>Return value of Display function :- <b>{{ display }}</b></p>
    </div>
        <button type="button" class="btn btn-primary" @click='test()'>Click</button><br><br>
    
    
</div>
</template>

<script>
export default {
    data() {
        return {
            books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
            ],
            displayBoolean: true,
            count: 0,
            val: true
        }
    },
    computed: {
        togle() {
            return this.books.length > 0 ? 'Yes' : 'No'

        },
        display() {
            if (this.displayBoolean) {
                return true
            } else return false
        }
    },
    methods: {
        test(){
            return this.displayBoolean = ! this.displayBoolean
        }
    },
}
</script>

<style lang="">

</style>
