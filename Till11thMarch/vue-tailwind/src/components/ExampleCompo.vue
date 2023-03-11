<template lang="">
    <div class="px-8 mx-8">
        <ul class="list-disc">
            <li><router-link class="link no-underline hover:underline decoration-sky-600 hover:decoration-blue-400 text-blue-600 text-lg" to="/example/optionapi">optionapi</router-link></li>
            <li><router-link class="link no-underline hover:underline decoration-sky-600 hover:decoration-blue-400 text-blue-600 text-lg" to="/example/compositionapi">Composition API</router-link></li>
           
        </ul>
        <router-view ></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>