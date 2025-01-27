<script setup lang="ts">
import {ref} from 'vue';
import CustomLink from '../navigation/CustomLink.vue';

const props = defineProps<{index:string|number,toe?:boolean, current?:number}>();
const switchSides = ref(false);
const targetSelector = `#${props.toe?'toe':'ref'}_${props.index}_head`;
const sider = () => (switchSides.value = ((document.querySelector(targetSelector)?.getBoundingClientRect().x ?? 0)/window.innerWidth) >= 0.7);
</script>
<template>
  <li>
    <table class="footnotable"><tbody><tr>
      <td><CustomLink :id="`${toe?'toe':'ref'}_${index}`" :to="targetSelector"> <sup>^</sup> </CustomLink></td>
      <td> <slot /> </td></tr></tbody></table>
  </li>

  <Transition name="v-tele" @before-enter="sider()">
    <Teleport
      v-if="props.current == props.index" defer :to="targetSelector"
      @vue:before-mount="sider()">
      <aside :class="{'inline-note':true,grayborder:true,switched:switchSides}"><slot /></aside>
    </Teleport>
  </Transition>
</template>