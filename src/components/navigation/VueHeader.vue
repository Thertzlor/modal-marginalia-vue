<script setup lang="ts">
const props = defineProps<{id:string,level:number,index:number,title:string}>();
const emit = defineEmits<{(e:'add',index:number,level:number,title:string,id:string)}>();
emit('add',props.index,props.level,props.title,props.id);
</script>
<template>
  <h1 v-if="level===1" :id="id"><slot /></h1>
  <h2 v-else-if="level===2" :id="id"><slot /></h2>
  <h3 v-else-if="level===3" :id="id"><slot /></h3>
  <h4 v-else-if="level===4" :id="id"><slot /></h4>
  <h5 v-else-if="level===5" :id="id"><slot /></h5>
  <h6 v-else :id="id"><slot /></h6>
</template>