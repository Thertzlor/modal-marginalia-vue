<script setup lang="ts">
import {computed,ref} from 'vue';
const props = defineProps<{bigImgSwitch:boolean,bw:number,cw:number}>();
const emit = defineEmits<{(e:'stars'),(e:'res'),(e:"vis",arg:boolean)}>()
const positionAdjust = computed(() => {
  const same = props.bw === props.cw;
  return [
    {'--fullscr_offset_x': same ? '.5em' : '1em','--fullscr_offset_y': same ? '1em' : '.5em'},
    {'--fullscr_offset_x': same ? '4em' : '3.5em','--fullscr_offset_y': same ? '1.2em' : '.7em'},
    {'--fullscr_offset_x': same ? '7.5em' : '5.5em','--fullscr_offset_y': same ? '1.2em' : '.62em'}
  ];
});
</script>

<template>
  <input id="options" type="checkbox">
  <input id="starChanger" type="button" @click="emit('stars')">
  <input id="fullcheck" type="checkbox" @change="emit('res')">
  <label :style="positionAdjust[0]" title="Hide Sidebar" for="fullcheck">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polyline points="5,30 ,5,5 30,5" />
      <polyline points="70,5 ,95,5 95,30" />
      <polyline points="95,70 ,95,95 70,95" />
      <polyline points="30,95 ,5,95 5,70" />
    </svg>
  </label>
  <label
    v-if="bigImgSwitch" :style="positionAdjust[1]" title="Change Stars"
    for="starChanger">
    <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.981 164.981"><path fill="white" class="b" d="M82.88,0l13.684,47.614,44.054-23.696,.445,.445-23.918,43.276,47.836,14.351v.89l-47.392,13.906,23.473,43.721-.445,.556-44.054-23.696-13.684,47.614h-.89l-14.351-47.614-43.276,23.696-.445-.556,23.474-43.721L0,82.88v-.89l47.392-14.351L23.918,24.363l.445-.445,43.276,23.696L81.99,0h.89Zm-26.811,93.448l26.143-11.013H16.576l39.493,11.013Zm0-21.916l26.143,10.68L36.044,35.933l20.025,35.6Zm15.463,37.379l10.68-26.255-46.168,46.279,35.488-20.024Zm0-52.843l10.902,26.143V16.576l-10.902,39.493Zm21.916,52.843l-11.014-26.255v65.637l11.014-39.382Zm0-52.843l-10.792,26.143,46.279-46.279-35.488,20.136Zm15.463,15.463l-26.255,10.902h65.637l-39.382-10.902Zm0,21.916l-26.255-10.791,46.279,46.279-20.024-35.488Z" /></svg>
  </label>
  <label :style="positionAdjust[2]" for="options" title="Show Options" />
</template>