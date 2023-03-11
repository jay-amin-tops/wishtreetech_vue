<script setup lang="ts">
import {defineProps } from "vue";
// import {Post} from "../posts.ts";
// defineProps<{post:Post}>()
import {TimelinePost} from "../posts";
defineProps<{
    post:TimelinePost
    }>()
</script>
<template>
    
 <a class="panel">
  <a>{{post.title}}</a>
  <!-- {{post.created}} -->
  <div>{{post.created.toFormat("d MMM")}}</div>
 </a>
</template>

