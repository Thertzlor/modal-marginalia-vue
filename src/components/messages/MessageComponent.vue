<script setup lang="ts">
type ReplyOptions = (string|[string,string])[]
type UnwrapReply<T extends string|[string,string]> = T extends string? T:T[1]
type ReceivedReply<T extends ReplyOptions> = UnwrapReply<T[number]>

 type MessageDefinition<T extends ReplyOptions =ReplyOptions> = {
  title?:string,
  message:string,
  replies?:T
  callback?:(rep:ReceivedReply<T>,...args:any)=>any
}

const bumi: MessageDefinition<['henk',['Shit','shat']]> = {
  message:'',
  replies:['henk',['Shit','shat']],
  callback:(arg) => null
};

const casualMessages = [];
const blockingMessages = [];
</script>
<template>
  <div v-if="blockingMessages.length" class="modal_block" />
  <div />
</template>