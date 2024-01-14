<script setup lang="ts">
import {ref,onUnmounted} from 'vue';
const decision = ref<boolean|undefined>();
defineProps<{msg:string,yes:string,no:string}>();
onUnmounted(() => decision.value = undefined);
const emit = defineEmits<{(e:'confirm',arg:boolean)}>();
const emi = (b:boolean) => ((decision.value = b),setTimeout(() => emit('confirm',b),2500));
</script>

<template>
  <div id="cookie-warning" class="grayborder modal-message">
    <span v-if="decision">{{ yes }}</span>
    <span v-else-if="decision===false">{{ no }}</span>
    <span v-else>{{ msg }}</span>
    <template v-if="decision == undefined"><br><button
      v-for="n of ['Yes','No']" :key="n" class="grayborder hoverglow"
      @click="emi(n=='Yes')">{{ n }}</button></template>
  </div>
</template>