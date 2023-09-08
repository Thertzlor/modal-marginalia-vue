<script setup lang="ts">
import {ref,onUnmounted} from 'vue';
const decision = ref<boolean|undefined>();
onUnmounted(() => decision.value = undefined);
const emit = defineEmits<{(e:'confirm',arg:boolean)}>();
const emi = (b:boolean) => ((decision.value = b),setTimeout(() => emit('confirm',b),2500));
</script>

<template>
  <div id="cookie-warning" class="grayborder">
    <span v-if="decision">Spoken like a true warrior.<br>Now go in peace.</span>
    <span v-else-if="decision===false">That's understandable.<br>One can never be too careful these days.</span>
    <span v-else>To save your style preset this site needs to save a <strong>cookie</strong> on this device.<br>Do you consent?</span>
    <template v-if="decision == undefined"><br><button v-for="n of ['Yes','No']" :key="n" @click="emi(n=='Yes')">{{ n }}</button></template>
  </div>
</template>