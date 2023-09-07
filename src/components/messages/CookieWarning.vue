<script setup lang="ts">
defineProps<{visible:boolean}>();
const emit = defineEmits<{(e:'confirm',arg:boolean)}>();
</script>

<template>
  <div v-if="visible" id="cookie-warning">In order to save your style preset, I'll have to save a cookie, is that okay?<button @click="emit('confirm',true)">YES</button> <button @click="emit('confirm',false)">NO</button></div>
</template>