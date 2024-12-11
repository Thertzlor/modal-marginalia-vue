<script setup lang="ts">
import {ref} from 'vue';
import type {MessageDefinition} from './MessageComponent.vue';
import {useGlobals} from '@/stores/globals';
const {sleep} = useGlobals();

const props = defineProps<{def:MessageDefinition,critical?:boolean}>();
const emit = defineEmits<{(e:'response',arg:string,cbVal?:any)}>();
const text = ref<string>(props.def.message);
const submitted = ref(false);
const process = async(b:string) => {
  const cbVal = props.def.callback?.(b);
  const reaction = props.def.reactions?.[b];
  if (reaction){
    submitted.value = true;
    text.value = reaction;
    await sleep(props.def.reactionTimeout ?? 0);
  }
  emit('response',b,cbVal);
};
</script>

<template>
  <div :class="{grayborder:true, critical, ['modal-message']:true}">
    <span>{{ text }}</span>
    <br>
    <template v-if="!submitted">
      <button
        v-for="[i,r] of def.replies?.entries() ?? []" :key="i" class="grayborder hoverglow"
        @click="process(r == 'string'?r:r[1])">{{ typeof r == 'string'?r:r[0] }}</button>
    </template>
  </div>
</template>