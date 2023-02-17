<template>
    <div>
        <ul class="list-disc pr-4">
           <li><router-link class="link" to="/example/optionapiexample">Option API</router-link></li>
            <li><router-link class="link" to="/example/compositionapiexample">Composition API</router-link></li>
            <li><router-link class="link" to="/example/compositionapiscriptsetupexample">Composition API Script Setup</router-link></li>
        </ul>
        <router-view ></router-view>
    </div>
</template>
<script setup lang="ts">
</script>
<style>
    
</style>