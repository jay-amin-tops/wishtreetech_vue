<template>
    <div>

        <h1 :class="underline">Lorem ipsum dolor sit </h1>

        <h2 :title="title">Lorem ipsum, dolor sit amet consectetur</h2>

        <h2 :class="[istrue?'red' :'blue' ]">This is heading</h2>
    </div>
</template>

<script>

export default {
    data() {
        return {
            underline: 'underline',
            title:'this is title',
            istrue:true
        }
    },
}
</script>

<style>
.underline {
    text-decoration: underline;
}

.red{
    color: red;
}

.blue{
    color: blue;
}
</style>