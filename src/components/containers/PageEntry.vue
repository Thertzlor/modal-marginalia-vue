<script lang="ts" setup>
import {computed} from 'vue';
const props = defineProps<{page_disabled?: boolean, page_current?: boolean, page_target: string | number, page_text?: string | number, base_url?: string}>();
const emit = defineEmits<{(e: 'page', arg: string | number): void}>()
const rawRoute = computed(() => {
  let raw = (props.base_url || window.location.href).split("#")[0].replace(/page=\d*/g, "page=#");
  if (!raw.includes("page=#")) raw = `${raw}${raw.includes("=") ? "&" : "?"}page=#`;
  return raw
})
const navEmit = () => !props.page_disabled && emit('page', props.page_target)
</script>

<template>
  <li :class="{active: page_current}">
    <a @click.stop.prevent="navEmit" :href="rawRoute.replace('page=#', `page=${page_target}`)" class="pagination"
      :disabled="page_disabled ? true : undefined" :aria-current="page_current">
      {{page_text || "..."}}
    </a>
  </li>
</template>