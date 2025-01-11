<script setup lang="ts">
import {ref} from 'vue';
import {useGlobals} from '@/stores/globals';
import type {MessageDefinition} from './MessageComponent.vue';

const {sleep,defaultReactionTimeout} = useGlobals();
const props = defineProps<{def:MessageDefinition,critical?:boolean}>();
const emit = defineEmits<{(e:'response',arg:string,cbVal?:any),(e:'timeout')}>();
const text = ref<string>(props.def.message);
if (props.def.msgTimeout) setTimeout(() => emit('timeout'), props.def.msgTimeout);
const submitted = ref(false);
const process = async(b:string) => {
  const cbVal = props.def.callback?.(b);
  const reaction = props.def.reactions?.[b];
  if (reaction){
    submitted.value = true;
    text.value = reaction;
    await sleep(props.def.reactionTimeout ?? defaultReactionTimeout);
  }
  emit('response',b,cbVal);
};
</script>

<template>
  <div :class="{grayborder:true, critical, ['modal_message']:true}">
    <span>{{ text }}</span>
    <br>
    <template v-if="!submitted">
      <button
        v-for="(r,i) of def.replies ?? []" :key="i" class="grayborder hoverglow"
        @click="process(typeof r === 'string'?r:r[1])">{{ typeof r == 'string'?r:r[0] }}</button>
    </template>
  </div>
</template>