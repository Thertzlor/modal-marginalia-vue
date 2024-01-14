<script setup lang="ts">
defineProps<{msg:string}>();
const emit = defineEmits<{(e:'confirm',arg:boolean)}>();
const emi = (b:boolean) => emit('confirm',b);
</script>

<template>
  <div class="grayborder modal-message">
    <span>{{ msg }}</span>
    <br><button class="grayborder hoverglow" @click="emi(true)">Ok</button>
  </div>
</template>