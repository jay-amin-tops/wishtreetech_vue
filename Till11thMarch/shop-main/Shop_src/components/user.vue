<template lang="">
<div class="test">
    <h1>User Component</h1>
    <h2>{{item.name}}</h2>
    <h2>{{item.email}}</h2>

</div>
</template>

<script>
export default {
    props: {
        item: Object
    }

}
</script>

<style>
.test {
    background-color: bisque;
    padding: 20px;
    border-bottom: 2px solid;
    margin: 15px;
}
</style>
