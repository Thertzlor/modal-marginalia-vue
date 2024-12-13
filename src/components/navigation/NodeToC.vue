<script setup lang="ts">
import CustomLink from './CustomLink.vue';

export type tNode = {title:string,id:string,children:tNode[],parent?:tNode,level:number}
defineProps<{node:tNode}>();
const unToC = () => (document.getElementById('tocButton') as HTMLInputElement).checked=false;
</script>
<template>
  <li><CustomLink :to="`#${node.id}`" @nav="unToC">{{ node.title }}</CustomLink>
    <ul v-if="node.children.length"><NodeToC v-for="c of node.children" :key="c.id" :node="c" /></ul>
  </li>
</template>