<template lang="">
    <div>
      compo
      <BlogPost v-for=" post in postData" :key="post.id" :value="post.title"/>

      {{ postData }}
    </div>
</template>
<script setup >
import {ref} from 'vue';
import BlogPost from './20BlogPost.vue'

const postData = ref([
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Example' },
      { id: 3, title: 'Testing' },
])

</script>
<style lang="">
    
</style>