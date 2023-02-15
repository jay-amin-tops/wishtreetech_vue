<template lang="">
<div class="container">
    <div class="row mt-4">
        <div class="col">
            <child>
                <template v-slot:card-title>
                    <h5 class="card-title">Card title</h5>
                </template>
                <template v-slot:card-desc>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </template>
            </child>
        </div>
        <div class="col">
            <child>
                <template v-slot:card-title>
                    <h5 class="card-title">Card title</h5>
                </template>
                <template v-slot:card-desc>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </template>
            </child>
        </div>
        <div class="col">
            <child>
                <template v-slot:card-title>
                    <h5 class="card-title">Card title</h5>
                </template>
                <template v-slot:card-desc>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </template>
            </child>
        </div>

    </div>
</div>
</template>

<script>
import child from './child.vue'

export default {
    name: 'slot',
    data() {
        return {

        }
    },
    components: {
        child
    }

}
</script>

<style lang="">

</style>
