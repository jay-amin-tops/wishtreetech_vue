<template lang="">
    <div>
        <h1>Dynemic Component</h1>
        <component :is="componentVal"></component>
        <button class="btn btn-primary mx-1" @click="componentVal= 'php'">PHP</button>
        <button class="btn btn-primary mx-1" @click="componentVal= 'java'">JAVA</button>
        <button class="btn btn-primary mx-1" @click="componentVal= 'node'">NODE</button>
    </div>
</template>

<script>

import php from '../components/php.vue';
import node from '../components/node.vue';
import java from '../components/java.vue';

export default {
    name : 'dynemic_component',
    data() {
        return {
            componentVal:'php',
        }
    },
    components :{
        php,
        node,
        java
    }
    
}
</script>
<style lang="">
    
</style>