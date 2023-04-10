<script setup lang="ts">
import {computed} from 'vue';
import {RouterLink} from 'vue-router'
const props = defineProps({...(RouterLink as any).props, noBlank: Boolean})
const isExt = computed(() => typeof props.to === 'string' && props.to.startsWith('http'))
const isAnchor = computed(() => !isExt.value && props.to.startsWith('#'))
const scrolly = (anch: string) => document.getElementById(anch.slice(1))?.scrollIntoView()
</script>

<template>
  <a v-if="isExt" :target="noBlank ? 'self' : '_blank'" :href="to">
    <slot />
  </a>
  <a v-else-if="isAnchor" @click.stop.prevent="() => scrolly(to)" :href="to">
    <slot />
  </a>
  <router-link v-else v-bind="props as any">
    <slot />
  </router-link>
</template>