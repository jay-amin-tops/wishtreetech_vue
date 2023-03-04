<script lang="ts" setup>
import CustomButton from "./25CustomButton.vue";
</script>
<template>
    <!-- <div>Something inside child compo</div> -->
    <!-- class and style Merging -->
    <!-- <div class="checking">
        Child Compo
        <button>Click</button>
        <button>Click</button>
        <button>Click</button>
        <button>Click</button>
    </div> -->
    <!-- <div class="card">
        
        <span>title :</span>
        <span v-bind="$attrs">price :</span> 
        
        
    </div>
    <span>Fallthrough attributes: class={{ $attrs.class }}</span> -->

    <!-- <button>Click</button> -->
    <!-- <div {{$attrs}}>Something</div> -->
    <!-- <div v-bind="$attrs">Something</div> -->
    <!-- <div class="card">
    </div> -->
    <CustomButton />
    <Span></Span>
    <CardSable></CardSable>
    <Para></Para>
    <!-- <CustomButton /> -->
</template>


<style>
.large{
  background-color:orange
}
.checking{
  font-size:56px
}
</style>