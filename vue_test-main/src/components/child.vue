<template lang="">
<!-- <div>
        <h1>child Example</h1>
        <slot></slot>

    </div> -->

<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" alt="Card image cap">
    <div class="card-body">
        <slot name="card-title">
            <!-- <h5 class="card-title">Card title</h5> -->
        </slot>
        <slot name="card-desc">
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        </slot>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="">

</style>
