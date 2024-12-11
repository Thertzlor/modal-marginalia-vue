<script setup lang="ts">
import type {MessageDefinition} from './MessageComponent.vue';

const props = defineProps<{def:MessageDefinition}>();
const emit = defineEmits<{(e:'response',arg:string,cbVal?:any)}>();
const process = (b:string) => {
  const cbVal = props.def.callback?.(b);
  emit('response',b,cbVal);
};
</script>

<template>
  <div class="grayborder modal-message">
    <span>{{ def.message }}</span>
    <br><button
      v-for="[i,r] of def.replies?.entries() ?? []" :key="i" class="grayborder hoverglow"
      @click="process(r == 'string'?r:r[1])">{{ typeof r == 'string'?r:r[0] }}</button>
  </div>
</template>