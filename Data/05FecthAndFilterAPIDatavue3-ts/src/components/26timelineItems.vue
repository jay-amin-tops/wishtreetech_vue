<script setup lang="ts">
import {defineProps } from "vue";
// import {Post} from "../posts.ts";
// defineProps<{post:Post}>()
import {UserIdPost} from "../posts";
defineProps<{
    post:UserIdPost
    }>()
</script>
<template>
    
 <a class="panel">
  <a>{{post.title}}</a>
  <!-- {{post.created}} -->
  <div>{{post.id}}</div>
 </a>
</template>

