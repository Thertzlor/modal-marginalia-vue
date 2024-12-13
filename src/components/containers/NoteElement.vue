<script setup lang="ts">
import CustomLink from '../navigation/CustomLink.vue';

defineProps<{index:string|number,toe?:boolean}>();
</script>
<template>
  <li>
    <table class="footnotable"><tbody><tr>
      <td><CustomLink :id="`${toe?'toe':'ref'}_${index}`" :to="`#${toe?'toe':'ref'}_${index}_head`"> <sup>^</sup> </CustomLink></td>
      <td> <slot /> </td></tr></tbody></table>
  </li>
</template>