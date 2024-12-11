<script setup lang="ts">
import GenericMessage from './GenericMessage.vue';

type ReplyOptions = (string|[string,string])[]
type UnwrapReply<T extends string|[string,string]> = T extends string? T:T[1]
type ReceivedReply<T extends ReplyOptions> = UnwrapReply<T[number]>

export type MessageDefinition<T extends ReplyOptions =ReplyOptions> = {
  reactions?:Record<ReceivedReply<T>,string|undefined>
  msgTimeout?:number,
  reactionTimeout?:number,
  id?:string,
  title?:string,
  message:string,
  replies?:T
  callback?:(rep:ReceivedReply<T>,...args:any)=>any
}
const casualMessages = new Map<string,MessageDefinition>();
const blockingMessages = new Map<string,MessageDefinition>();

const emit = defineEmits<{(e:'subResponse',id:string,arg:string,cbVal?:any)}>();
const removeMessage = (key:string, casual=true) => (casual? casualMessages:blockingMessages).delete(key);
const processReply = (key,replyVal,cbVal?:any) => {
  removeMessage(key);
  emit('subResponse',key,replyVal,cbVal);
};
const addMessage = (def:MessageDefinition,blocking = false) => (blocking?blockingMessages:casualMessages).set(def.id ?? self.crypto.randomUUID(), def);

defineExpose({addMessage,removeMessage});
</script>
<template>
  <div v-if="blockingMessages.size" class="modal_block" />
  <GenericMessage
    v-for="[k,m] of casualMessages.entries()" :key="k" :def="m"
    @response="(r,c)=>processReply(k,r,c)" />

</template>