<script setup lang="ts">
import {computed} from 'vue';
import {RouterLink} from 'vue-router';
import {useGlobals} from '@/stores/globals';
const {scrollOption} = useGlobals();
const props = defineProps({...(RouterLink as any).props, noBlank: Boolean});
const emit = defineEmits<{(arg:'nav')}>();
const isExt = computed(() => typeof props.to === 'string' && props.to.startsWith('http'));
const isAnchor = computed(() => !isExt.value && props.to.startsWith('#'));
const scrolly = (anch:string) => (document.getElementById(anch.slice(1))?.scrollIntoView(scrollOption),emit('nav'));
</script>

<template>
  <!-- @vue-expect-error hacky templates -->
  <a v-if="isExt" :target="noBlank ? 'self' : '_blank'" :href="to"><slot /></a>
  <!-- @vue-expect-error more hacky templates -->
  <a v-else-if="isAnchor" :href="to" @click.stop.prevent="() => scrolly(to)"><slot /></a>
  <!-- @vue-expect-error even more hacky templates -->
  <RouterLink v-else v-bind="props"><slot /></RouterLink>
</template>