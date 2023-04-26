<script lang="ts" setup>
import {computed} from 'vue';
const props = defineProps<{pageDisabled?:boolean, pageCurrent?:boolean, pageTarget:string | number, pageText?:string | number, baseUrl?:string}>();
const emit = defineEmits<{(e:'page', arg:string | number):void}>();
const rawRoute = computed(() => {
  let raw = (props.baseUrl || window.location.href).split('#')[0].replace(/page=\d*/g, 'page=#');
  if (!raw.includes('page=#')) raw = `${raw}${raw.includes('=') ? '&' : '?'}page=#`;
  return raw;
});
const navEmit = () => !props.pageDisabled && emit('page', props.pageTarget);
</script>

<template>
  <li :class="{active: pageCurrent}">
    <a
      :href="rawRoute.replace('page=#', `page=${pageTarget}`)" class="pagination" :disabled="pageDisabled ? true : undefined"
      :aria-current="pageCurrent" @click.stop.prevent="navEmit">
      {{ pageText || "..." }}
    </a>
  </li>
</template>