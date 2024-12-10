<script setup lang="ts">
import {computed} from 'vue';
import NodeToC from './NodeToC.vue';
import type{tNode} from './NodeToC.vue';
const props = defineProps<{elements:([level:number,id:string, title:string]|undefined)[]}>();
const filteredList = computed(() => props.elements.filter((f): f is NonNullable<typeof f> => !!f));
const toTree = computed(() => {
  const treeArr = [] as tNode[];
  let currentNode:tNode|undefined;
  for (const [i,[level,id,title]] of filteredList.value.entries()) {
    const newNode:tNode = {children:[],id,title,level};
    if (i===0) treeArr.push(newNode);
    else if (!currentNode) {
      let targetList:tNode[] = treeArr;
      let lastNode = targetList.at(-1);
      while (lastNode && lastNode.level < newNode.level) {
        targetList = lastNode.children;
        lastNode = targetList.at(-1);
      }
      targetList.push(newNode);
    } else {
      while (currentNode && currentNode.level > newNode.level) currentNode = currentNode.parent;
      if (currentNode) currentNode.children.push(newNode);
      else treeArr.push(newNode);
    }
  }
  return treeArr;
});
</script>
<template>
  <div id="tabcont">
    <div class="toc">
      <ul>
        <NodeToC v-for="c of toTree" :key="c.id" :node="c" />
      </ul>
    </div>
  </div>
</template>