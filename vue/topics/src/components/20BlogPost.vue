<template lang="">
    <div class="bg">
    {{ value }}
    </div>
</template>
<script setup >
import {defineProps} from 'vue';
defineProps(['value'])
</script>
<style>
    .bg{
      background-color:grey;
      padding:20px
    }
</style>