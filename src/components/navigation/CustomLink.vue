<script setup lang="ts">
import {computed} from 'vue';
import {RouterLink} from 'vue-router';
import {useGlobals} from '@/stores/globals';
const {scrollOption} = useGlobals();
const props = defineProps({...(RouterLink as any).props, noBlank: Boolean});
const isExt = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
const isAnchor = computed(() => !isExt.value && props.to.startsWith('#'));
const scrolly = (anch:string) => document.getElementById(anch.slice(1))?.scrollIntoView(scrollOption);
</script>

<template>
  <a v-if="isExt" :target="noBlank ? 'self' : '_blank'" :href="to"><slot /></a>
  <a v-else-if="isAnchor" :href="to" @click.stop.prevent="() => scrolly(to)"><slot /></a>
  <router-link v-else v-bind="(props as any)"><slot /></router-link>
</template>