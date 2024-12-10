<script setup lang="ts">
import CustomLink from './CustomLink.vue';
export type tNode = {title:string,id:string,children:tNode[],parent?:tNode,level:number}
defineProps<{node:tNode}>();
</script>
<template>
  <li><CustomLink :to="`#${node.id}`">{{ node.title }}</CustomLink>
    <ul v-if="node.children.length"><NodeToC v-for="c of node.children" :key="c.id" :node="c" /></ul>
  </li>
</template>