<script setup lang="ts">
import {ref} from 'vue';
import GenericMessage from './GenericMessage.vue';

type ReplyOptions = (string|[string,string])[]
type UnwrapReply<T extends string|[string,string]> = T extends string? T:T[1]
type ReceivedReply<T extends ReplyOptions> = UnwrapReply<T[number]>

export type MessageDefinition<T extends ReplyOptions =ReplyOptions> = {
  reactions?:Record<ReceivedReply<T>,string|undefined>
  critical?:boolean,
  msgTimeout?:number,
  reactionTimeout?:number,
  id?:string,
  title?:string,
  message:string,
  replies?:T
  callback?:(rep:ReceivedReply<T>,...args:any)=>any
}
const casualMessages = ref(new Map<string,MessageDefinition<any>>());
const criticalMessages = ref(new Map<string,MessageDefinition<any>>());

const emit = defineEmits<{(e:'subResponse',id:string,arg:string,cbVal?:any)}>();

type RemoveCall = {(key:string,critical?:boolean):void,(def:MessageDefinition):void}
const removeMessage:RemoveCall = (key:string|MessageDefinition, critical= typeof key ==='string'? false:key.critical ?? false) => void (critical? criticalMessages:casualMessages).value.delete(typeof key === 'string'?key:key.id??'');
const processReply = (key,replyVal,cbVal?:any,critical=false) => {
  removeMessage(key,critical);
  emit('subResponse',key,replyVal,cbVal);
};


type AddCall = {<T extends ReplyOptions = ReplyOptions>(def:MessageDefinition<T>,critical?:boolean):void}
const addMessage:AddCall = <T extends ReplyOptions = ReplyOptions>(def:MessageDefinition<T>,critical = def.critical ?? false, target = (critical?criticalMessages:casualMessages).value) => void ((!def.id || !target.has(def.id)) && target.set(def.id ?? self.crypto.randomUUID(), def));

defineExpose({addMessage,removeMessage});
</script>
<template>
  <div v-if="criticalMessages.size" class="modal_block" />
  <div v-if="casualMessages.size+criticalMessages.size" id="msgtainer">

    <GenericMessage
      v-for="[k,m] of casualMessages.entries()" :key="k" :def="m"
      @timeout="()=>removeMessage(k)"
      @response="(r,c)=>processReply(k,r,c)" />
    <GenericMessage
      v-for="[k,m] of criticalMessages.entries()" :key="k" :critical="true"
      :def="m"
      @timeout="()=>removeMessage(k,true)"
      @response="(r,c)=>processReply(k,r,c,true)" />
  </div>

</template>