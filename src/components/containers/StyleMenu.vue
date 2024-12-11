<script setup lang="ts">
import {useGlobals} from '@/stores/globals';
import {ref} from 'vue';
const {localCssVars} = useGlobals();
defineProps<{initalData:any}>();
const finalStyle = ref({});

defineExpose({finalStyle});
</script>
<template>
  <div />
</template>